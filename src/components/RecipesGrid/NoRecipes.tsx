import { cn } from "@/lib/utils";
import { HeartCrackIcon } from "../icons/HeartCrackIcon";
import { TypographyH2 } from "../Typography/TypographyH2";
import { TypographyP } from "../Typography/TypographyP";

interface NoRecipesProps {
  isTransitionPending: boolean;
}

export const NoRecipes = ({ isTransitionPending }: NoRecipesProps) => {
  return (
    <div
      className={cn("pt-8 text-center", {
        ["opacity-50"]: isTransitionPending,
      })}
    >
      <HeartCrackIcon className="mx-auto h-12 w-12 text-gray-400" />
      <TypographyH2 className="text-gray-900">
        Ingen opskrifter fundet!
      </TypographyH2>
      <TypographyP className="mt-2 text-gray-500">
        Fandt ingen opskrifter som passer til det som du søgte.
      </TypographyP>
    </div>
  );
};
