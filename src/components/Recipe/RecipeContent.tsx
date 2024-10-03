"use client";

import { RecipeQueryResult } from "../../../sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { TypographyH1 } from "../Typography/TypographyH1";
import { Button } from "../ui/button";
import { TypographyP } from "../Typography/TypographyP";
import { cn } from "@/lib/utils";
import { WakeLockToggle } from "./WakeLockToggle";
import { RecipeEditor } from "./RecipeEditor";
import { useRecipeContext } from "./recipeContext";
import { calcInitialState, isIngredientComplete } from "./recipeReducer";
import { RecipeIngredientReferenceResult } from "./RecipeIngredientReference";
import { recipeIngredientReferenceType } from "@/sanity/schemaTypes/recipeIngredientReference";
import {
  RecipeIngredientReference,
  ScalableRecipeNumber as ScalableRecipeNumberType,
} from "./types";
import { ComponentProps } from "react";
import { PortableText } from "../PortableText/PortableText";
import { formatAmount } from "@/utils/recipeUtils";
import { CheckIcon } from "../icons/CheckIcon";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { scalableRecipeNumberType } from "@/sanity/schemaTypes/scalableRecipeNumberType";
import { ScalableRecipeNumber } from "./ScalableRecipeNumber";

const RecipeCheckIcon = (props: { className?: string }) => (
  <div className={cn("rounded-sm bg-green-500 p-[1px]", props.className)}>
    <CheckIcon className="text-white" width={14} height={14} strokeWidth={2} />
  </div>
);

const types: ComponentProps<typeof PortableText>["types"] = {
  [recipeIngredientReferenceType.name]: ({
    value,
  }: {
    value: RecipeIngredientReference | null | undefined;
  }) => {
    if (!value) return null;

    return <RecipeIngredientReferenceResult value={value} />;
  },
  [scalableRecipeNumberType.name]: ({
    value,
  }: {
    value: ScalableRecipeNumberType | null | undefined;
  }) => {
    if (!value) return null;

    return <ScalableRecipeNumber value={value} />;
  },
};

const block: ComponentProps<typeof PortableText>["block"] = {
  normal: ({ children }) => (
    <TypographyP className="leading-7">{children}</TypographyP>
  ),
};

type RecipeContentProps = {
  recipe: NonNullable<RecipeQueryResult>;
};

export const RecipeContent = ({ recipe }: RecipeContentProps) => {
  const { title, mainImage, instructions } = recipe;

  const {
    ingredients,
    ingredientsCompletion,
    servings,
    initialServings,
    dispatch,
  } = useRecipeContext();

  const reset = () => {
    dispatch({
      type: "reset",
      payload: calcInitialState(recipe),
    });
  };

  const scaleFactor = 100 * (servings / initialServings);

  const allIngredientsComplete = Object.values(ingredientsCompletion).every(
    (c) => Object.values(c).every((c) => c.completed),
  );

  return (
    <main className="px-6">
      <div className="prose-lg prose container mx-auto flex max-w-5xl flex-col gap-8 pt-8 sm:pt-12">
        {title ? (
          <TypographyH1 className="text-center sm:mb-8">{title}</TypographyH1>
        ) : null}
        {mainImage?.asset?._ref && (
          <Image
            className="w-full rounded-lg"
            src={urlFor(mainImage.asset._ref).width(2000).height(800).url()}
            width={1000}
            height={400}
            alt={title || ""}
            priority={true}
          />
        )}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="col-span-full flex flex-col gap-4 md:col-span-4">
            <WakeLockToggle />

            <div className="flex flex-wrap gap-2">
              <RecipeEditor onReset={reset} />
              <Button type="button" variant="outline" onClick={reset}>
                Tilbakestill
              </Button>
            </div>

            <TypographyP className="!mt-0">
              Antall:{" "}
              <span className="font-bold">{formatAmount(servings)}</span>
            </TypographyP>

            {ingredients ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="flex items-center gap-2">
                      <RecipeCheckIcon
                        className={cn({
                          ["bg-muted-foreground"]: !allIngredientsComplete,
                        })}
                      />
                      Ingrediens
                    </TableHead>
                    <TableHead>Prosent</TableHead>
                    <TableHead>Mengde</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ingredients.map(
                    ({ ingredientId, name, percent, amount, unit }) => {
                      const isComplete = isIngredientComplete(
                        ingredientsCompletion,
                        ingredientId,
                      );

                      return (
                        <TableRow key={ingredientId}>
                          <TableCell
                            className={cn(`flex items-center gap-2`, {
                              ["text-green-900"]: isComplete,
                            })}
                          >
                            {isComplete ? (
                              <RecipeCheckIcon />
                            ) : (
                              <div className="size-[16px]" />
                            )}
                            {name}
                          </TableCell>
                          <TableCell>{formatAmount(percent, 1)}%</TableCell>
                          <TableCell>
                            {formatAmount(amount)} {unit}
                          </TableCell>
                        </TableRow>
                      );
                    },
                  )}
                </TableBody>
              </Table>
            ) : null}
          </div>
          <div className="col-span-full align-baseline md:col-span-8">
            {scaleFactor !== 100 && (
              <Alert>
                <InfoCircledIcon />
                <AlertTitle>Skalert oppskrift</AlertTitle>
                <AlertDescription>
                  Denne oppskriften er skalert {formatAmount(scaleFactor, 0)}% i
                  forhold til original oppskrift. Ta kontakt hvis oppskriften
                  ikke gir mening eller noen av ingrediensene ikke blir riktig
                  skalert.
                </AlertDescription>
              </Alert>
            )}

            {instructions ? (
              <PortableText value={instructions} block={block} types={types} />
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
};
