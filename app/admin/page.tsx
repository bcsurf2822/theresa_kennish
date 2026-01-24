"use client";

import type React from "react";
import { useState, useCallback, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import {
  Upload,
  X,
  Plus,
  BarChart3,
  MousePointerClick,
  Users,
  Clock,
  TrendingUp,
  Eye,
  LogOut,
  ImageIcon,
  AlertCircle,
  FolderOpen,
  User,
  ExternalLink,
  Trash2,
  Edit3,
  Loader2,
  Check,
  RefreshCw,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";

// Types
interface Series {
  _id: string;
  title: string;
  slug: { current: string } | string;
  description?: string;
  coverImage?: string;
  order?: number;
}

interface Artwork {
  _id: string;
  title: string;
  description?: string;
  image: string;
  imageAlt?: string;
  showOnHomepage: boolean;
  order?: number;
  series?: {
    _id: string;
    title: string;
    slug: string;
  };
}

interface AboutData {
  _id?: string;
  profileImage?: string;
  bio?: { children?: { text?: string }[] }[];
  secondaryTitle?: string;
  secondaryAbout?: { children?: { text?: string }[] }[];
  secondaryImage?: string;
}

// Mock data for metrics
const metricsData = {
  totalClicks: 12847,
  pageViews: 45230,
  uniqueVisitors: 8934,
  avgSessionDuration: "3m 42s",
  bounceRate: 42.3,
  topPages: [
    { name: "Homepage", views: 15420, clicks: 4230 },
    { name: "Portfolio", views: 8340, clicks: 2180 },
    { name: "About", views: 6720, clicks: 1890 },
    { name: "Contact", views: 5430, clicks: 1420 },
    { name: "Gallery", views: 4120, clicks: 980 },
  ],
  dailyData: [
    { day: "Mon", views: 6420 },
    { day: "Tue", views: 7130 },
    { day: "Wed", views: 6890 },
    { day: "Thu", views: 7450 },
    { day: "Fri", views: 8120 },
    { day: "Sat", views: 5430 },
    { day: "Sun", views: 4790 },
  ],
};

export default function AdminDashboard() {
  const { data: session } = useSession();
  const [openSections, setOpenSections] = useState<string[]>(["series"]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      {/* Subtle pattern overlay */}
      <div
        className="fixed inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar className="h-11 w-11 ring-2 ring-blue-500/20 ring-offset-2 ring-offset-white">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || "User"}
                  />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white font-medium">
                    {session?.user?.name?.charAt(0) ||
                      session?.user?.email?.charAt(0) ||
                      "A"}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-slate-800 tracking-tight">
                  Welcome back,{" "}
                  {session?.user?.name?.split(" ")[0] || "Admin"}
                </h1>
                <p className="text-sm text-slate-500">{session?.user?.email}</p>
              </div>
            </div>

            <Button
              onClick={() => signOut({ callbackUrl: "/login" })}
              variant="outline"
              className="bg-white/50 border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-800 hover:border-slate-300 gap-2 transition-all duration-200"
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">Sign out</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
            Content Management
          </h2>
          <p className="text-slate-500 mt-1">
            Manage your series, artworks, and site content
          </p>
        </div>

        <Accordion
          type="multiple"
          value={openSections}
          onValueChange={setOpenSections}
          className="space-y-4"
        >
          {/* Series Management Section */}
          <AccordionItem
            value="series"
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-sm shadow-slate-200/50 overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-slate-50/50 transition-colors [&[data-state=open]]:bg-slate-50/30">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/25">
                  <FolderOpen size={20} />
                </div>
                <div className="text-left">
                  <h3 className="text-base font-semibold text-slate-800">
                    Series Management
                  </h3>
                  <p className="text-sm text-slate-500 font-normal">
                    Create and manage artwork series
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <SeriesManagementSection />
            </AccordionContent>
          </AccordionItem>

          {/* Artwork Management Section */}
          <AccordionItem
            value="artworks"
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-sm shadow-slate-200/50 overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-slate-50/50 transition-colors [&[data-state=open]]:bg-slate-50/30">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25">
                  <ImageIcon size={20} />
                </div>
                <div className="text-left">
                  <h3 className="text-base font-semibold text-slate-800">
                    Artwork Management
                  </h3>
                  <p className="text-sm text-slate-500 font-normal">
                    Upload and manage artworks
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <ArtworkManagementSection />
            </AccordionContent>
          </AccordionItem>

          {/* About Page Editor Section */}
          <AccordionItem
            value="about"
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-sm shadow-slate-200/50 overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-slate-50/50 transition-colors [&[data-state=open]]:bg-slate-50/30">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-lg shadow-teal-500/25">
                  <User size={20} />
                </div>
                <div className="text-left">
                  <h3 className="text-base font-semibold text-slate-800">
                    About Page Editor
                  </h3>
                  <p className="text-sm text-slate-500 font-normal">
                    Edit your bio and profile information
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <AboutPageEditor />
            </AccordionContent>
          </AccordionItem>

          {/* Site Metrics Section */}
          <AccordionItem
            value="metrics"
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-sm shadow-slate-200/50 overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-slate-50/50 transition-colors [&[data-state=open]]:bg-slate-50/30">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25">
                  <BarChart3 size={20} />
                </div>
                <div className="text-left">
                  <h3 className="text-base font-semibold text-slate-800">
                    Site Metrics
                  </h3>
                  <p className="text-sm text-slate-500 font-normal">
                    View your website analytics
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <SiteMetricsSection />
            </AccordionContent>
          </AccordionItem>

          {/* Report Issue Section */}
          <AccordionItem
            value="report"
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-sm shadow-slate-200/50 overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-slate-50/50 transition-colors [&[data-state=open]]:bg-slate-50/30">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/25">
                  <AlertCircle size={20} />
                </div>
                <div className="text-left">
                  <h3 className="text-base font-semibold text-slate-800">
                    Report Issue
                  </h3>
                  <p className="text-sm text-slate-500 font-normal">
                    Let us know about any problems
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <ReportIssueSection />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center">
        <p className="text-sm text-slate-400">Admin Dashboard</p>
      </footer>
    </div>
  );
}

// ============ SERIES MANAGEMENT ============
function SeriesManagementSection() {
  const [series, setSeries] = useState<Series[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const fetchSeries = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/series");
      const data = await res.json();
      setSeries(data);
    } catch (error) {
      console.error("[SeriesManagement] Error fetching series:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  const getSlugString = (slug: { current: string } | string): string => {
    if (typeof slug === "string") return slug;
    return slug?.current || "";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-slate-600">
          {loading ? "Loading..." : `${series.length} Series`}
        </h4>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={fetchSeries}
            className="gap-1"
          >
            <RefreshCw size={14} />
            Refresh
          </Button>
          <Button
            size="sm"
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white gap-1"
          >
            <Plus size={14} />
            New Series
          </Button>
        </div>
      </div>

      {showCreateForm && (
        <CreateSeriesForm
          onSuccess={() => {
            setShowCreateForm(false);
            fetchSeries();
          }}
          onCancel={() => setShowCreateForm(false)}
        />
      )}

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
        </div>
      ) : series.length === 0 ? (
        <div className="text-center py-12 text-slate-500">
          No series found. Create your first series above.
        </div>
      ) : (
        <div className="grid gap-4">
          {series.map((s) => (
            <SeriesCard
              key={s._id}
              series={s}
              onDelete={() => fetchSeries()}
              onUpdate={() => fetchSeries()}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function CreateSeriesForm({
  onSuccess,
  onCancel,
}: {
  onSuccess: () => void;
  onCancel: () => void;
}) {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [order, setOrder] = useState("0");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!slug || slug === generateSlug(title)) {
      setSlug(generateSlug(value));
    }
  };

  const handleSubmit = async () => {
    if (!title || !slug) return;
    setSaving(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("description", description);
    formData.append("order", order);
    if (coverImage) {
      formData.append("coverImage", coverImage);
    }

    try {
      const res = await fetch("/api/series", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        onSuccess();
      } else {
        const error = await res.json();
        alert(error.error || "Failed to create series");
      }
    } catch (error) {
      console.error("[CreateSeriesForm] Error:", error);
      alert("Failed to create series");
    }
    setSaving(false);
  };

  return (
    <div className="bg-slate-50/50 border border-slate-200 rounded-xl p-6 space-y-4">
      <h4 className="font-medium text-slate-800">Create New Series</h4>

      <div className="space-y-2">
        <Label>Title *</Label>
        <Input
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          placeholder="Series title (e.g., Ocean Paintings)"
        />
        {title && (
          <p className="text-xs text-slate-500">
            URL: /{slug}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label>Description</Label>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Series description..."
          rows={3}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Order</Label>
          <Input
            type="number"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label>Cover Image</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setCoverImage(e.target.files?.[0] || null)}
          />
        </div>
      </div>

      <div className="flex gap-2 pt-2">
        <Button
          onClick={handleSubmit}
          disabled={!title || !slug || saving}
          className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white"
        >
          {saving ? (
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
          ) : (
            <Check className="h-4 w-4 mr-2" />
          )}
          Create Series
        </Button>
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

function SeriesCard({
  series,
  onDelete,
  onUpdate,
}: {
  series: Series;
  onDelete: () => void;
  onUpdate: () => void;
}) {
  const [deleting, setDeleting] = useState(false);

  const slug =
    typeof series.slug === "string" ? series.slug : series.slug?.current || "";

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this series?")) return;
    setDeleting(true);

    try {
      const res = await fetch(`/api/series/${slug}`, {
        method: "DELETE",
      });

      if (res.ok) {
        onDelete();
      } else {
        alert("Failed to delete series");
      }
    } catch (error) {
      console.error("[SeriesCard] Delete error:", error);
      alert("Failed to delete series");
    }
    setDeleting(false);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4">
      {series.coverImage ? (
        <img
          src={series.coverImage}
          alt={series.title}
          className="w-16 h-16 object-cover rounded-lg"
        />
      ) : (
        <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center">
          <FolderOpen className="h-6 w-6 text-slate-400" />
        </div>
      )}

      <div className="flex-1 min-w-0">
        <h5 className="font-medium text-slate-800 truncate">{series.title}</h5>
        <p className="text-sm text-slate-500 truncate">/{slug}</p>
        {series.description && (
          <p className="text-sm text-slate-400 truncate mt-1">
            {series.description}
          </p>
        )}
      </div>

      <div className="flex items-center gap-2">
        <Link href={`/series/${slug}`} target="_blank">
          <Button variant="outline" size="sm" className="gap-1">
            <ExternalLink size={14} />
            View
          </Button>
        </Link>
        <Button
          variant="outline"
          size="sm"
          onClick={handleDelete}
          disabled={deleting}
          className="text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          {deleting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Trash2 size={14} />
          )}
        </Button>
      </div>
    </div>
  );
}

// ============ ARTWORK MANAGEMENT ============
function ArtworkManagementSection() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [series, setSeries] = useState<Series[]>([]);
  const [loading, setLoading] = useState(true);
  const [showUploadForm, setShowUploadForm] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [artworksRes, seriesRes] = await Promise.all([
        fetch("/api/artworks"),
        fetch("/api/series"),
      ]);
      const artworksData = await artworksRes.json();
      const seriesData = await seriesRes.json();
      setArtworks(artworksData);
      setSeries(seriesData);
    } catch (error) {
      console.error("[ArtworkManagement] Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-medium text-slate-600">
          {loading ? "Loading..." : `${artworks.length} Artworks`}
        </h4>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={fetchData}
            className="gap-1"
          >
            <RefreshCw size={14} />
            Refresh
          </Button>
          <Button
            size="sm"
            onClick={() => setShowUploadForm(!showUploadForm)}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white gap-1"
          >
            <Plus size={14} />
            Upload Artwork
          </Button>
        </div>
      </div>

      {showUploadForm && (
        <UploadArtworkForm
          series={series}
          onSuccess={() => {
            setShowUploadForm(false);
            fetchData();
          }}
          onCancel={() => setShowUploadForm(false)}
        />
      )}

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
        </div>
      ) : artworks.length === 0 ? (
        <div className="text-center py-12 text-slate-500">
          No artworks found. Upload your first artwork above.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {artworks.map((artwork) => (
            <ArtworkCard
              key={artwork._id}
              artwork={artwork}
              onDelete={() => fetchData()}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function UploadArtworkForm({
  series,
  onSuccess,
  onCancel,
}: {
  series: Series[];
  onSuccess: () => void;
  onCancel: () => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [seriesId, setSeriesId] = useState("");
  const [showOnHomepage, setShowOnHomepage] = useState(false);
  const [order, setOrder] = useState("0");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const handleImageChange = (file: File | null) => {
    setImage(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async () => {
    if (!title || !image) return;
    setSaving(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("seriesId", seriesId === "none" ? "" : seriesId);
    formData.append("showOnHomepage", showOnHomepage.toString());
    formData.append("order", order);
    formData.append("image", image);

    try {
      const res = await fetch("/api/artworks", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        onSuccess();
      } else {
        const error = await res.json();
        alert(error.error || "Failed to upload artwork");
      }
    } catch (error) {
      console.error("[UploadArtworkForm] Error:", error);
      alert("Failed to upload artwork");
    }
    setSaving(false);
  };

  return (
    <div className="bg-slate-50/50 border border-slate-200 rounded-xl p-6 space-y-4">
      <h4 className="font-medium text-slate-800">Upload New Artwork</h4>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Title *</Label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Artwork title..."
          />
        </div>
        <div className="space-y-2">
          <Label>Series</Label>
          <Select value={seriesId} onValueChange={setSeriesId}>
            <SelectTrigger>
              <SelectValue placeholder="Select series (optional)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No series</SelectItem>
              {series.map((s) => (
                <SelectItem key={s._id} value={s._id}>
                  {s.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Description</Label>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Artwork description..."
          rows={3}
        />
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label>Order</Label>
          <Input
            type="number"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label>Show on Homepage</Label>
          <div className="flex items-center h-9">
            <Switch
              checked={showOnHomepage}
              onCheckedChange={setShowOnHomepage}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Image *</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e.target.files?.[0] || null)}
          />
        </div>
      </div>

      {imagePreview && (
        <div className="relative w-32 h-32">
          <img
            src={imagePreview}
            alt="Preview"
            className="w-full h-full object-cover rounded-lg"
          />
          <button
            onClick={() => handleImageChange(null)}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
          >
            <X size={12} />
          </button>
        </div>
      )}

      <div className="flex gap-2 pt-2">
        <Button
          onClick={handleSubmit}
          disabled={!title || !image || saving}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
        >
          {saving ? (
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
          ) : (
            <Upload className="h-4 w-4 mr-2" />
          )}
          Upload Artwork
        </Button>
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

function ArtworkCard({
  artwork,
  onDelete,
}: {
  artwork: Artwork;
  onDelete: () => void;
}) {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this artwork?")) return;
    setDeleting(true);

    try {
      const res = await fetch(`/api/artworks/${artwork._id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        onDelete();
      } else {
        alert("Failed to delete artwork");
      }
    } catch (error) {
      console.error("[ArtworkCard] Delete error:", error);
      alert("Failed to delete artwork");
    }
    setDeleting(false);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      <div className="aspect-square relative">
        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-full object-cover"
        />
        {artwork.showOnHomepage && (
          <span className="absolute top-2 left-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">
            Homepage
          </span>
        )}
      </div>
      <div className="p-4">
        <h5 className="font-medium text-slate-800 truncate">{artwork.title}</h5>
        {artwork.series && (
          <p className="text-sm text-slate-500 truncate">
            {artwork.series.title}
          </p>
        )}
        <div className="flex items-center justify-between mt-3">
          {artwork.series ? (
            <Link
              href={`/series/${artwork.series.slug}`}
              target="_blank"
              className="text-xs text-blue-600 hover:underline flex items-center gap-1"
            >
              <ExternalLink size={12} />
              View Series
            </Link>
          ) : (
            <span />
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={handleDelete}
            disabled={deleting}
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            {deleting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Trash2 size={14} />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

// ============ ABOUT PAGE EDITOR ============
function AboutPageEditor() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [bio, setBio] = useState("");
  const [secondaryTitle, setSecondaryTitle] = useState("");
  const [secondaryAbout, setSecondaryAbout] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [secondaryImage, setSecondaryImage] = useState<File | null>(null);

  const fetchAbout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/about");
      if (res.ok) {
        const data = await res.json();
        setAboutData(data);
        // Extract text from Portable Text
        const bioText =
          data.bio
            ?.map(
              (block: { children?: { text?: string }[] }) =>
                block.children?.map((c) => c.text).join("") || ""
            )
            .join("\n") || "";
        const secondaryText =
          data.secondaryAbout
            ?.map(
              (block: { children?: { text?: string }[] }) =>
                block.children?.map((c) => c.text).join("") || ""
            )
            .join("\n") || "";
        setBio(bioText);
        setSecondaryTitle(data.secondaryTitle || "");
        setSecondaryAbout(secondaryText);
      }
    } catch (error) {
      console.error("[AboutPageEditor] Error fetching:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAbout();
  }, []);

  const handleSave = async () => {
    setSaving(true);

    const formData = new FormData();
    formData.append("bio", bio);
    formData.append("secondaryTitle", secondaryTitle);
    formData.append("secondaryAbout", secondaryAbout);
    if (profileImage) {
      formData.append("profileImage", profileImage);
    }
    if (secondaryImage) {
      formData.append("secondaryImage", secondaryImage);
    }

    try {
      const res = await fetch("/api/about", {
        method: "PUT",
        body: formData,
      });

      if (res.ok) {
        alert("About page updated successfully!");
        fetchAbout();
      } else {
        alert("Failed to update about page");
      }
    } catch (error) {
      console.error("[AboutPageEditor] Save error:", error);
      alert("Failed to update about page");
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Profile Image</Label>
            {aboutData?.profileImage && (
              <img
                src={aboutData.profileImage}
                alt="Profile"
                className="w-24 h-24 object-cover rounded-lg mb-2"
              />
            )}
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setProfileImage(e.target.files?.[0] || null)}
            />
          </div>
          <div className="space-y-2">
            <Label>Bio</Label>
            <Textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Your bio..."
              rows={6}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Secondary Image</Label>
            {aboutData?.secondaryImage && (
              <img
                src={aboutData.secondaryImage}
                alt="Secondary"
                className="w-24 h-24 object-cover rounded-lg mb-2"
              />
            )}
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setSecondaryImage(e.target.files?.[0] || null)}
            />
          </div>
          <div className="space-y-2">
            <Label>Secondary Title</Label>
            <Input
              value={secondaryTitle}
              onChange={(e) => setSecondaryTitle(e.target.value)}
              placeholder="e.g., My Approach"
            />
          </div>
          <div className="space-y-2">
            <Label>Secondary About</Label>
            <Textarea
              value={secondaryAbout}
              onChange={(e) => setSecondaryAbout(e.target.value)}
              placeholder="Additional information..."
              rows={5}
            />
          </div>
        </div>
      </div>

      <Button
        onClick={handleSave}
        disabled={saving}
        className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white"
      >
        {saving ? (
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
        ) : (
          <Check className="h-4 w-4 mr-2" />
        )}
        Save Changes
      </Button>
    </div>
  );
}

// ============ SITE METRICS SECTION ============
function SiteMetricsSection() {
  const maxViews = Math.max(...metricsData.dailyData.map((d) => d.views));

  return (
    <div className="space-y-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <MetricCard
          icon={MousePointerClick}
          label="Total Clicks"
          value={metricsData.totalClicks.toLocaleString()}
          trend="+12%"
          color="blue"
        />
        <MetricCard
          icon={Eye}
          label="Page Views"
          value={metricsData.pageViews.toLocaleString()}
          trend="+8%"
          color="emerald"
        />
        <MetricCard
          icon={Users}
          label="Visitors"
          value={metricsData.uniqueVisitors.toLocaleString()}
          trend="+15%"
          color="violet"
        />
        <MetricCard
          icon={Clock}
          label="Avg. Session"
          value={metricsData.avgSessionDuration}
          trend="+5%"
          color="amber"
        />
        <MetricCard
          icon={TrendingUp}
          label="Bounce Rate"
          value={`${metricsData.bounceRate}%`}
          trend="-3%"
          trendPositive={true}
          color="rose"
        />
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Traffic Overview */}
        <Card className="bg-slate-50/50 border-slate-200/60">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-slate-700">
              Traffic Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {metricsData.dailyData.map((day) => (
                <div key={day.day} className="flex items-center gap-3">
                  <span className="text-xs font-medium text-slate-500 w-8">
                    {day.day}
                  </span>
                  <div className="flex-1 h-7 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transition-all duration-500"
                      style={{ width: `${(day.views / maxViews) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 w-14 text-right">
                    {day.views.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Popular Pages */}
        <Card className="bg-slate-50/50 border-slate-200/60">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-semibold text-slate-700">
              Popular Pages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {metricsData.topPages.map((page, index) => (
                <div
                  key={page.name}
                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-100"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        index === 0
                          ? "bg-gradient-to-br from-amber-400 to-amber-500 text-white"
                          : index === 1
                          ? "bg-gradient-to-br from-slate-300 to-slate-400 text-white"
                          : index === 2
                          ? "bg-gradient-to-br from-amber-600 to-amber-700 text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium text-slate-700">
                      {page.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {page.views.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <MousePointerClick className="h-3 w-3" />
                      {page.clicks.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
  trend,
  trendPositive,
  color,
}: {
  icon: typeof BarChart3;
  label: string;
  value: string;
  trend: string;
  trendPositive?: boolean;
  color: "blue" | "emerald" | "violet" | "amber" | "rose";
}) {
  const isPositive = trendPositive ?? trend.startsWith("+");

  const colorClasses = {
    blue: "from-blue-500 to-blue-600 shadow-blue-500/20",
    emerald: "from-emerald-500 to-emerald-600 shadow-emerald-500/20",
    violet: "from-violet-500 to-violet-600 shadow-violet-500/20",
    amber: "from-amber-500 to-amber-600 shadow-amber-500/20",
    rose: "from-rose-500 to-rose-600 shadow-rose-500/20",
  };

  return (
    <Card className="bg-white border-slate-200/60 overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <div
            className={`p-1.5 rounded-lg bg-gradient-to-br ${colorClasses[color]} shadow-lg`}
          >
            <Icon className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="text-xs font-medium text-slate-500">{label}</span>
        </div>
        <div className="flex items-end justify-between">
          <span className="text-xl font-bold text-slate-800">{value}</span>
          <span
            className={`text-xs font-semibold ${
              isPositive ? "text-emerald-500" : "text-rose-500"
            }`}
          >
            {trend}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

// ============ REPORT ISSUE SECTION ============
function ReportIssueSection() {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log("Reporting issue:", { subject, description });
    setSubmitted(true);
    setTimeout(() => {
      setSubject("");
      setDescription("");
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/25">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-slate-800 mb-2">
          Issue Reported
        </h3>
        <p className="text-slate-500">
          Thank you for your feedback. We'll look into it shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="subject" className="text-sm font-medium text-slate-700">
          Subject
        </Label>
        <Input
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Brief description of the issue..."
          className="bg-slate-50/50 border-slate-200 focus:border-amber-400 focus:ring-amber-400/20"
        />
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="description"
          className="text-sm font-medium text-slate-700"
        >
          Description
        </Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Please provide as much detail as possible..."
          className="bg-slate-50/50 border-slate-200 focus:border-amber-400 focus:ring-amber-400/20 min-h-[120px]"
          rows={5}
        />
      </div>

      <Button
        onClick={handleSubmit}
        disabled={!subject || !description}
        className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shadow-lg shadow-amber-500/25 disabled:opacity-50 disabled:shadow-none"
      >
        Submit Report
      </Button>
    </div>
  );
}
