import {
  defineDocuments,
  defineLocations,
  PresentationPluginOptions,
} from "sanity/presentation";

const mainDocuments = defineDocuments([
  {
    route: "/opskrifter/:slug",
    filter: `_type == "recipe" && slug.current == $slug`,
  },
  {
    route: "/",
    filter: `_type == "home"`,
  },
  {
    route: "/om",
    filter: `_type == "about"`,
  },
]);

const locations = {
  recipe: defineLocations({
    select: {
      title: "title",
      slug: "slug.current",
    },
    resolve: (doc: { title: string | null; slug: string | null } | null) => ({
      locations: [
        {
          title: doc?.title ?? "Untitled",
          href: `/opskrifter/${doc?.slug}`,
        },
        {
          title: "Alle opskrifter",
          href: "/opskrifter",
        },
      ],
    }),
  }),
  home: defineLocations({
    message: "This document is used to render the front page",
    tone: "positive",
    locations: [{ title: "Home", href: "/" }],
  }),
  about: defineLocations({
    locations: [{ title: "Om", href: "/om" }],
  }),
};

export const resolve: PresentationPluginOptions["resolve"] = {
  mainDocuments,
  locations,
};
