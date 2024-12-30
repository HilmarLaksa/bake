import { Metadata } from "next";

export const siteName = "TheFoodDude.dk";
export const siteUrl = "https://www.TheFoodDude.dk";
export const creator = "Steffen Jespersen";

export const openGraphMetadata: Metadata["openGraph"] = {
  locale: "da_DK",
  type: "website",
  url: siteUrl,
  siteName,
};

export const twitterMetadata: Metadata["twitter"] = {
  card: "summary_large_image",
  title: siteName,
  creator: creator,
};
