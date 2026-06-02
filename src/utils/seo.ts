import type { Metadata } from "next";
import { baseURL, person, social } from "@/resources";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
};

function toAbsoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }

  const normalizedPath = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${baseURL}${normalizedPath}`;
}

export function buildCanonical(path: string) {
  if (!path || path === "/") {
    return baseURL;
  }
  return `${baseURL}${path}`;
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  keywords = [],
}: BuildMetadataInput): Metadata {
  const canonical = buildCanonical(path);
  const socialProfiles = social
    .filter((entry) => entry.link.startsWith("http"))
    .map((entry) => entry.link);

  return {
    metadataBase: new URL(baseURL),
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    category: "technology",
    authors: [{ name: person.name, url: `${baseURL}/about` }],
    creator: person.name,
    publisher: person.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      images: image ? [{ url: toAbsoluteUrl(image), alt: title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [toAbsoluteUrl(image)] : undefined,
      creator: socialProfiles.find((link) => link.includes("twitter.com")),
    },
  };
}
