/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type About = {
  _id: string;
  _type: "about";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  body?: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "normal" | "h2" | "h3" | "h4" | "blockquote";
        listItem?: "bullet";
        markDefs?: Array<{
          href?: string;
          _type: "link";
          _key: string;
        }>;
        level?: number;
        _type: "block";
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: "image";
        _key: string;
      }
  >;
};

export type Home = {
  _id: string;
  _type: "home";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  subtitle?: string;
  recipes?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "recipe";
  }>;
  seo?: Seo;
};

export type TimeValue = {
  _type: "timeValue";
  time?: number;
  type?: "hours" | "minutes" | "seconds" | "days";
};

export type ScalableRecipeNumber = {
  _type: "scalableRecipeNumber";
  number?: number;
  suffix?: string;
};

export type RecipeIngredientReference = {
  _type: "recipeIngredientReference";
  ingredient?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "recipeIngredient";
  };
  percentage?: number;
};

export type RecipeIngredient = {
  _id: string;
  _type: "recipeIngredient";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  ingredient?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "ingredient";
  };
  percent?: number;
  unit?: "g" | "dl" | "ts" | "ss" | "stk" | "egg";
};

export type Ingredient = {
  _id: string;
  _type: "ingredient";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  type?: "dry" | "wet" | "other";
};

export type Recipe = {
  _id: string;
  _type: "recipe";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  categories?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  activeTime?: Duration;
  totalTime?: Duration;
  baseDryIngredients?: number;
  servings?: number;
  ingredients?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "recipeIngredient";
  }>;
  instructions?: Array<{
    children?: Array<
      | {
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }
      | ({
          _key: string;
        } & RecipeIngredientReference)
      | ({
          _key: string;
        } & ScalableRecipeNumber)
    >;
    style?: "normal" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  seo?: Seo;
};

export type Seo = {
  _type: "seo";
  metaTitle?: string;
  metaDescription?: string;
  openGraphImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
};

export type Duration = {
  _type: "duration";
  start?: TimeValue;
  end?: TimeValue;
};

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
};

export type BlockContent = Array<
  | {
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "normal" | "h2" | "h3" | "h4" | "blockquote";
      listItem?: "bullet";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }
  | {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
      _key: string;
    }
>;

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type MediaTag = {
  _id: string;
  _type: "media.tag";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: Slug;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | About
  | Home
  | TimeValue
  | ScalableRecipeNumber
  | RecipeIngredientReference
  | RecipeIngredient
  | Ingredient
  | Recipe
  | Seo
  | Duration
  | Category
  | BlockContent
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | MediaTag
  | Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: allRecipesQuery
// Query: *[_type == "recipe"]  |order(_createdAt desc)  {      _id,  title,  "slug": slug.current,  mainImage {      hotspot,  crop,  alt,  asset->{    _id,    metadata {      lqip    }  },  }  }
export type AllRecipesQueryResult = Array<{
  _id: string;
  title: string | null;
  slug: string | null;
  mainImage: {
    hotspot: SanityImageHotspot | null;
    crop: SanityImageCrop | null;
    alt: string | null;
    asset: {
      _id: string;
      metadata: {
        lqip: string | null;
      } | null;
    } | null;
  } | null;
}>;
// Variable: recipesSearchQuery
// Query: *[    _type == "recipe" &&    (pt::text(instructions) match $searchQuery || title match $searchQuery)]    |order(_createdAt desc)    |score(pt::text(instructions) match $searchQuery, boost(title match $searchQuery, 3))    |order(_score desc)    {        _id,  title,  "slug": slug.current,  mainImage {      hotspot,  crop,  alt,  asset->{    _id,    metadata {      lqip    }  },  }    }
export type RecipesSearchQueryResult = Array<{
  _id: string;
  title: string | null;
  slug: string | null;
  mainImage: {
    hotspot: SanityImageHotspot | null;
    crop: SanityImageCrop | null;
    alt: string | null;
    asset: {
      _id: string;
      metadata: {
        lqip: string | null;
      } | null;
    } | null;
  } | null;
}>;
// Variable: recipesSearchWithCategoriesQuery
// Query: *[_type == "recipe" &&  (pt::text(instructions) match $searchQuery || title match $searchQuery) &&  count((categories[]->slug.current)[@ in $categories]) > 0]  |order(_createdAt desc)  |score(pt::text(instructions) match $searchQuery, boost(title match $searchQuery, 3))  |order(_score desc)  {      _id,  title,  "slug": slug.current,  mainImage {      hotspot,  crop,  alt,  asset->{    _id,    metadata {      lqip    }  },  }  }
export type RecipesSearchWithCategoriesQueryResult = Array<{
  _id: string;
  title: string | null;
  slug: string | null;
  mainImage: {
    hotspot: SanityImageHotspot | null;
    crop: SanityImageCrop | null;
    alt: string | null;
    asset: {
      _id: string;
      metadata: {
        lqip: string | null;
      } | null;
    } | null;
  } | null;
}>;
// Variable: allCategoriesQuery
// Query: *[_type == "category"]  |order(title asc){    _id, title, "slug": slug.current,  }
export type AllCategoriesQueryResult = Array<{
  _id: string;
  title: string | null;
  slug: string | null;
}>;
// Variable: recipeQuery
// Query: *[_type == "recipe" && slug.current == $slug][0]{    _id,    _createdAt,    _rev,    title,    mainImage {        hotspot,  crop,  alt,  asset->{    _id,    metadata {      lqip    }  },    },    categories[]->{      title,    },    ingredients[]->{      _id,      "ingredient": ingredient->{        name,        type,      },      unit,      percent,    },    activeTime,    totalTime,    baseDryIngredients,    servings,    instructions[]{      ...,      _type == "block" => {        ...,        children[]{          ...,          _type == "recipeIngredientReference" => {            ...,            "ingredient": @.ingredient->{              _id,              "name": ingredient->.name,              percent,              unit,            },          }        }      }    },    seo}
export type RecipeQueryResult = {
  _id: string;
  _createdAt: string;
  _rev: string;
  title: string | null;
  mainImage: {
    hotspot: SanityImageHotspot | null;
    crop: SanityImageCrop | null;
    alt: string | null;
    asset: {
      _id: string;
      metadata: {
        lqip: string | null;
      } | null;
    } | null;
  } | null;
  categories: Array<{
    title: string | null;
  }> | null;
  ingredients: Array<{
    _id: string;
    ingredient: {
      name: string | null;
      type: "dry" | "other" | "wet" | null;
    } | null;
    unit: "dl" | "egg" | "g" | "ss" | "stk" | "ts" | null;
    percent: number | null;
  }> | null;
  activeTime: Duration | null;
  totalTime: Duration | null;
  baseDryIngredients: number | null;
  servings: number | null;
  instructions: Array<{
    children: Array<
      | {
          _key: string;
          _type: "recipeIngredientReference";
          ingredient: {
            _id: string;
            name: string | null;
            percent: number | null;
            unit: "dl" | "egg" | "g" | "ss" | "stk" | "ts" | null;
          } | null;
          percentage?: number;
        }
      | {
          _key: string;
          _type: "scalableRecipeNumber";
          number?: number;
          suffix?: string;
        }
      | {
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }
    > | null;
    style?: "blockquote" | "h2" | "h3" | "h4" | "normal";
    listItem?: "bullet";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
  seo: Seo | null;
} | null;
// Variable: pageSlugQuery
// Query: *[_id == $pageId][0]{  _type,  "slug": slug.current,}
export type PageSlugQueryResult =
  | {
      _type: "about";
      slug: null;
    }
  | {
      _type: "category";
      slug: string | null;
    }
  | {
      _type: "home";
      slug: null;
    }
  | {
      _type: "ingredient";
      slug: null;
    }
  | {
      _type: "media.tag";
      slug: null;
    }
  | {
      _type: "recipe";
      slug: string | null;
    }
  | {
      _type: "recipeIngredient";
      slug: null;
    }
  | {
      _type: "sanity.fileAsset";
      slug: null;
    }
  | {
      _type: "sanity.imageAsset";
      slug: null;
    }
  | null;
// Variable: homePageQuery
// Query: *[_type == "home"][0]{  subtitle,  recipes[]->{    _id,    title,    "slug": slug.current,    mainImage {        hotspot,  crop,  alt,  asset->{    _id,    metadata {      lqip    }  },    },  },}
export type HomePageQueryResult = {
  subtitle: string | null;
  recipes: Array<{
    _id: string;
    title: string | null;
    slug: string | null;
    mainImage: {
      hotspot: SanityImageHotspot | null;
      crop: SanityImageCrop | null;
      alt: string | null;
      asset: {
        _id: string;
        metadata: {
          lqip: string | null;
        } | null;
      } | null;
    } | null;
  }> | null;
} | null;
// Variable: aboutQuery
// Query: *[_type == "about"][0]{  title,  body,}
export type AboutQueryResult = {
  title: string | null;
  body: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "blockquote" | "h2" | "h3" | "h4" | "normal";
        listItem?: "bullet";
        markDefs?: Array<{
          href?: string;
          _type: "link";
          _key: string;
        }>;
        level?: number;
        _type: "block";
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: "image";
        _key: string;
      }
  > | null;
} | null;
// Variable: homeSitemapQuery
// Query: *[_type == "home"][0]{    "slug": slug.current,  _updatedAt,}
export type HomeSitemapQueryResult = {
  slug: null;
  _updatedAt: string;
} | null;
// Variable: aboutSitemapQuery
// Query: *[_type == "about"][0]{    "slug": slug.current,  _updatedAt,}
export type AboutSitemapQueryResult = {
  slug: null;
  _updatedAt: string;
} | null;
// Variable: recipesSitemapQuery
// Query: *[_type == "recipe"] {    "slug": slug.current,  _updatedAt,}
export type RecipesSitemapQueryResult = Array<{
  slug: string | null;
  _updatedAt: string;
}>;
// Variable: homeSeoQuery
// Query: *[_type == "home"][0]{  seo}
export type HomeSeoQueryResult = {
  seo: Seo | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    '*[_type == "recipe"]\n  |order(_createdAt desc)\n  {\n    \n  _id,\n  title,\n  "slug": slug.current,\n  mainImage {\n    \n  hotspot,\n  crop,\n  alt,\n  asset->{\n    _id,\n    metadata {\n      lqip\n    }\n  },\n  }\n\n  }': AllRecipesQueryResult;
    '*[\n    _type == "recipe" &&\n    (pt::text(instructions) match $searchQuery || title match $searchQuery)]\n    |order(_createdAt desc)\n    |score(pt::text(instructions) match $searchQuery, boost(title match $searchQuery, 3))\n    |order(_score desc)\n    {\n      \n  _id,\n  title,\n  "slug": slug.current,\n  mainImage {\n    \n  hotspot,\n  crop,\n  alt,\n  asset->{\n    _id,\n    metadata {\n      lqip\n    }\n  },\n  }\n\n    }': RecipesSearchQueryResult;
    '*[_type == "recipe" &&\n  (pt::text(instructions) match $searchQuery || title match $searchQuery) &&\n  count((categories[]->slug.current)[@ in $categories]) > 0]\n  |order(_createdAt desc)\n  |score(pt::text(instructions) match $searchQuery, boost(title match $searchQuery, 3))\n  |order(_score desc)\n  {\n    \n  _id,\n  title,\n  "slug": slug.current,\n  mainImage {\n    \n  hotspot,\n  crop,\n  alt,\n  asset->{\n    _id,\n    metadata {\n      lqip\n    }\n  },\n  }\n\n  }': RecipesSearchWithCategoriesQueryResult;
    '*[_type == "category"]\n  |order(title asc){\n    _id, title, "slug": slug.current,\n  }': AllCategoriesQueryResult;
    '*[_type == "recipe" && slug.current == $slug][0]{\n    _id,\n    _createdAt,\n    _rev,\n    title,\n    mainImage {\n      \n  hotspot,\n  crop,\n  alt,\n  asset->{\n    _id,\n    metadata {\n      lqip\n    }\n  },\n    },\n    categories[]->{\n      title,\n    },\n    ingredients[]->{\n      _id,\n      "ingredient": ingredient->{\n        name,\n        type,\n      },\n      unit,\n      percent,\n    },\n    activeTime,\n    totalTime,\n    baseDryIngredients,\n    servings,\n    instructions[]{\n      ...,\n      _type == "block" => {\n        ...,\n        children[]{\n          ...,\n          _type == "recipeIngredientReference" => {\n            ...,\n            "ingredient": @.ingredient->{\n              _id,\n              "name": ingredient->.name,\n              percent,\n              unit,\n            },\n          }\n        }\n      }\n    },\n    seo\n}': RecipeQueryResult;
    '*[_id == $pageId][0]{\n  _type,\n  "slug": slug.current,\n}': PageSlugQueryResult;
    '*[_type == "home"][0]{\n  subtitle,\n  recipes[]->{\n    _id,\n    title,\n    "slug": slug.current,\n    mainImage {\n      \n  hotspot,\n  crop,\n  alt,\n  asset->{\n    _id,\n    metadata {\n      lqip\n    }\n  },\n    },\n  },\n}': HomePageQueryResult;
    '*[_type == "about"][0]{\n  title,\n  body,\n}': AboutQueryResult;
    '*[_type == "home"][0]{\n  \n  "slug": slug.current,\n  _updatedAt,\n\n}': HomeSitemapQueryResult;
    '*[_type == "about"][0]{\n  \n  "slug": slug.current,\n  _updatedAt,\n\n}': AboutSitemapQueryResult;
    '*[_type == "recipe"] {\n  \n  "slug": slug.current,\n  _updatedAt,\n\n}': RecipesSitemapQueryResult;
    '*[_type == "home"][0]{\n  seo\n}': HomeSeoQueryResult;
  }
}
