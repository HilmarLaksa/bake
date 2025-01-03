import {
  aboutSitemapQuery,
  homeSitemapQuery,
  recipesSitemapQuery,
} from "@/sanity/lib/queries";
import { ArrayElement } from "@/utils/types";
import { MetadataRoute } from "next";
import { siteUrl } from "./shared-metadata";
import { sanityFetch } from "@/sanity/lib/live";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [{ data: recipes }, { data: home }, { data: about }] =
    await Promise.all([
      sanityFetch({ query: recipesSitemapQuery, stega: false }),
      sanityFetch({ query: homeSitemapQuery, stega: false }),
      sanityFetch({ query: aboutSitemapQuery, stega: false }),
    ]);

  const mappedRecipes = recipes
    .map<ArrayElement<MetadataRoute.Sitemap> | null>((recipe) => {
      if (!recipe.slug) {
        return null;
      }

      return {
        url: `${siteUrl}/opskrifter/${recipe.slug}`,
        lastModified: recipe._updatedAt,
        changeFrequency: "weekly",
        priority: 0.9,
      };
    })
    .filter((recipe) => recipe !== null);

  return [
    {
      url: siteUrl,
      lastModified: home?._updatedAt ?? new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/om`,
      lastModified: about?._updatedAt ?? new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/opskrifter`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...mappedRecipes,
  ];
}
