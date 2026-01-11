# Backend Implementation Notes - January 11, 2026

## Sanity Configuration

**Project ID:** `mcfd2t8i`
**Dataset:** `production`
**API Version:** `2024-01-01`

### Client Setup

```typescript
// sanity/client.ts

// Read client (public data, no token needed)
export const client = createClient({
  projectId: "mcfd2t8i",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

// Write client (requires SANITY_API_TOKEN)
export const writeClient = createClient({
  projectId: "mcfd2t8i",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});
```

---

## GROQ Queries

### Series Queries

```groq
// List all series
*[_type == "series"] | order(order asc) {
  _id,
  title,
  slug,
  description,
  "coverImage": coverImage.asset->url,
  order
}

// Get series by slug
*[_type == "series" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  "coverImage": coverImage.asset->url,
  order
}
```

### Artworks Queries

```groq
// List all artworks
*[_type == "artwork"] | order(order asc) {
  _id,
  title,
  description,
  "image": image.asset->url,
  "imageAlt": image.alt,
  showOnHomepage,
  order,
  "series": series->{
    _id,
    title,
    "slug": slug.current
  }
}

// Artworks by series slug
*[_type == "artwork" && series->slug.current == $seriesSlug] | order(order asc) {
  _id,
  title,
  description,
  "image": image.asset->url,
  "imageAlt": image.alt,
  showOnHomepage,
  order,
  "series": series->{
    _id,
    title,
    "slug": slug.current
  }
}

// Homepage artworks
*[_type == "artwork" && showOnHomepage == true] | order(order asc) { ... }
```

### About Query

```groq
*[_type == "about"][0] {
  _id,
  "profileImage": profileImage.asset->url,
  bio,
  secondaryTitle,
  secondaryAbout,
  "secondaryImage": secondaryImage.asset->url
}
```

---

## API Route Patterns

### Image Upload Pattern

All image uploads use FormData and the Sanity assets API:

```typescript
// Example from /api/artworks/route.ts POST handler
const image = formData.get("image") as File | null;

if (image && image.size > 0) {
  const imageBuffer = Buffer.from(await image.arrayBuffer());
  const uploadedAsset = await writeClient.assets.upload("image", imageBuffer, {
    filename: image.name,
    contentType: image.type,
  });

  doc.image = {
    _type: "image",
    asset: {
      _type: "reference",
      _ref: uploadedAsset._id,
    },
  };
}
```

### Reference Pattern

For linking documents (e.g., artwork to series):

```typescript
// Creating a reference
if (seriesId) {
  doc.series = {
    _type: "reference",
    _ref: seriesId,
  };
}

// Removing a reference
if (formData.has("seriesId") && !seriesId) {
  updates.series = null;
}
```

### Portable Text Conversion

Bio fields are stored as Portable Text. Plain text is converted:

```typescript
if (bio !== null) {
  updates.bio = [
    {
      _type: "block",
      _key: `bio-${Date.now()}`,
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: `span-${Date.now()}`,
          text: bio,
          marks: [],
        },
      ],
    },
  ];
}
```

---

## Authentication Flow

### NextAuth Configuration

```typescript
// app/api/auth/[...nextauth]/route.ts

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const allowedEmails = process.env.ALLOWED_ADMIN_EMAILS?.split(",") || [];
      return allowedEmails.includes(user.email || "");
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
};
```

### Admin Route Protection

```typescript
// app/admin/layout.tsx

export default async function AdminLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}
```

---

## Known Issues & Solutions

### Issue: Circular Fetch in Server Components

**Problem:** Server components calling `fetch()` to localhost API routes caused deadlocks.

**Solution:** Use Sanity client directly in server components instead of API routes.

```typescript
// BEFORE (caused issues)
async function getSeries() {
  const res = await fetch(`${baseUrl}/api/series`);
  return res.json();
}

// AFTER (works correctly)
async function getSeries() {
  return client.fetch(SERIES_QUERY);
}
```

### Issue: useSearchParams Suspense Boundary

**Problem:** Build failed with "useSearchParams() should be wrapped in a suspense boundary"

**Solution:** Extract component using useSearchParams and wrap in Suspense:

```typescript
function LoginContent() {
  const searchParams = useSearchParams();
  // ...
}

export default function AdminLogin() {
  return (
    <Suspense fallback={<LoginFallback />}>
      <LoginContent />
    </Suspense>
  );
}
```

---

## Schema Types Reference

### Series
```typescript
{
  _type: "series",
  title: string,
  slug: { _type: "slug", current: string },
  description: string,
  coverImage: ImageReference,
  order: number
}
```

### Artwork
```typescript
{
  _type: "artwork",
  title: string,
  description: string,
  image: ImageReference,
  showOnHomepage: boolean,
  order: number,
  series: Reference // to series document
}
```

### About
```typescript
{
  _type: "about",
  profileImage: ImageReference,
  bio: PortableText[],
  secondaryTitle: string,
  secondaryAbout: PortableText[],
  secondaryImage: ImageReference
}
```

---

## Deployment Checklist

- [ ] Generate Sanity API token with write permissions
- [ ] Set up Google OAuth credentials in Google Cloud Console
- [ ] Configure all environment variables in production
- [ ] Verify CORS settings in Sanity project
- [ ] Test admin login with whitelisted email
- [ ] Test CRUD operations in production environment
