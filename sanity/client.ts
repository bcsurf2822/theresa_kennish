import { createClient } from "next-sanity";

// Read client (no token needed for public data)
export const client = createClient({
  projectId: "6ho8eufe",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

// Write client (requires API token with write permissions)
export const writeClient = createClient({
  projectId: "6ho8eufe",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});
