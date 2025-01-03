"use client";

import { RecipeQueryResult } from "../../../sanity.types";
import { Button } from "../ui/button";
import { TypographyP } from "../Typography/TypographyP";
import { WakeLockToggle } from "./WakeLockToggle";
import { useRecipeContext } from "./recipeContext";
import { RecipeIngredientReferenceResult } from "./RecipeIngredientReference";
import {
  RecipeIngredientReference,
  ScalableRecipeNumber as ScalableRecipeNumberType,
} from "./types";
import { ComponentProps, Fragment } from "react";
import { PortableText } from "../PortableText/PortableText";
import { formatAmount } from "@/utils/recipeUtils";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { ScalableRecipeNumber } from "./ScalableRecipeNumber";
import { TypographyH3 } from "../Typography/TypographyH3";
import { IngredientsTable } from "./IngredientsTable";
import { TypographyH4 } from "../Typography/TypographyH4";
import { TypographyH2 } from "../Typography/TypographyH2";
import {
  recipeIngredientReferenceTypeName,
  scalableRecipeNumberTypeName,
} from "@/sanity/schemaTypes/recipe/constants";
import dynamic from "next/dynamic";
import { RecipeHeader } from "./Header/RecipeHeader";
import { InfoItems } from "./InfoItems";
import { calcInitialState } from "./store/initialState";
import { useStore } from "zustand";
import { useShallow } from "zustand/react/shallow";
import { Card } from "../ui/card";

const RecipeEditor = dynamic(() =>
  import("./Editor/RecipeEditor").then((mod) => mod.RecipeEditor),
);

const types: ComponentProps<typeof PortableText>["types"] = {
  [recipeIngredientReferenceTypeName]: ({
    value,
  }: {
    value: RecipeIngredientReference | null | undefined;
  }) => {
    if (!value) return null;

    return <RecipeIngredientReferenceResult value={value} />;
  },
  [scalableRecipeNumberTypeName]: ({
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
    <TypographyP className="leading-[1.85rem]">{children}</TypographyP>
  ),
};

interface RecipeContentProps {
  recipe: NonNullable<RecipeQueryResult>;
}

export const RecipeContent = ({ recipe }: RecipeContentProps) => {
  const { title, mainImage, instructions, activeTime, totalTime } = recipe;

  const recipeStore = useRecipeContext();

  const [ingredients, ingredientsGroupOrder, servings, initialServings, reset] =
    useStore(
      recipeStore,
      useShallow((s) => [
        s.ingredients,
        s.ingredientsGroupOrder,
        s.servings,
        s.initialServings,
        s.reset,
      ]),
    );

  const handleReset = () => {
    reset(calcInitialState(recipe));
  };

  const scaleFactor = 100 * (servings / initialServings);

  return (
    <main className="px-6">
      <div className="prose-lg prose container mx-auto flex max-w-5xl flex-col gap-8 pt-10 sm:pt-16">
        <RecipeHeader title={title} mainImage={mainImage} />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="col-span-full flex flex-col gap-6 md:col-span-4">
            <Card className="flex flex-col gap-6 rounded-lg p-4">
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-2">
                  <RecipeEditor
                    onReset={handleReset}
                    triggerClassName="flex-1"
                  />
                  <Button
                    className="flex-1"
                    type="button"
                    variant="outline"
                    onClick={handleReset}
                  >
                    Nulstil
                  </Button>
                </div>

                <WakeLockToggle />
              </div>

              <InfoItems
                servings={servings}
                activeTime={activeTime}
                totalTime={totalTime}
              />
            </Card>

            <Card className="flex flex-col gap-2 rounded-lg p-4">
              <TypographyH3 as="h2">Ingredienser</TypographyH3>

              <IngredientsTable
                group={null}
                ingredients={ingredients.filter((i) => !i.group)}
              />

              {ingredientsGroupOrder.map((group) => {
                const groupIngredients = ingredients.filter(
                  (i) => i.group === group,
                );

                if (groupIngredients.length === 0) return null;

                return (
                  <Fragment key={group}>
                    <TypographyH4 as="h3">{group}</TypographyH4>
                    <IngredientsTable
                      group={group}
                      ingredients={groupIngredients}
                    />
                  </Fragment>
                );
              })}
            </Card>
          </div>
          <div className="col-span-full align-baseline md:col-span-8">
            <TypographyH2>Fremgangsmåde</TypographyH2>

            {parseFloat(scaleFactor.toFixed(2)) !== 100 && (
              <Alert className="my-4">
                <InfoCircledIcon />
                <AlertTitle>Skaleret opskrift</AlertTitle>
                <AlertDescription>
                  Denne opskriften er skaleret{" "}
                  {scaleFactor > 100 ? "op til" : "ned til"}{" "}
                  {formatAmount(scaleFactor, "%", "0")} av original opskrift.{" "}
                  
                  Hvis den skalerede opskrift ikke giver mening eller at nogle af ingredienserne ikke bliver korrekt skaleret.
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
