import { urlForImage } from "@/sanity/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FrontPageRecipesQueryResult } from "../../../sanity.types";

type RecipesGridProps = {
  recipes: FrontPageRecipesQueryResult;
};

export const RecipesGrid = ({ recipes }: RecipesGridProps) => {
  return (
    <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {recipes.map((recipe) => (
        <Link
          href={`/oppskrifter/${recipe.slug?.current}`}
          key={recipe._id}
          className="flex flex-col justify-between rounded-lg bg-white shadow-sm"
        >
          {recipe.mainImage ? (
            <Image
              width={1000}
              height={1000}
              src={
                urlForImage(recipe.mainImage)?.height(1000).width(1000).url() ??
                ""
              }
              alt={recipe.mainImage?.alt ?? "Recipe"}
              className="h-48 w-full rounded-t-lg object-cover"
            />
          ) : (
            <div className="flex w-full flex-grow items-center justify-center text-8xl">
              🍞
            </div>
          )}
          <div className="p-4">
            <h2 className="text-2xl font-bold">{recipe.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};
