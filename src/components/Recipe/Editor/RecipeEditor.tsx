"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../../ui/button";
import { useRecipeContext } from "../recipeContext";
import { formatAmount } from "@/utils/recipeUtils";
import { Label } from "@radix-ui/react-label";
import { DeferredNumberInput } from "../DeferredNumberInput";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { isDefined } from "@/utils/tsUtils";
import { IngredientEditor } from "./IngredientEditor";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TypographyH4 } from "@/components/Typography/TypographyH4";
import { useStore } from "zustand";
import { useShallow } from "zustand/react/shallow";

interface RecipeEditorProps {
  triggerClassName?: string;
  onReset: () => void;
}

export const RecipeEditor = ({
  onReset,
  triggerClassName,
}: RecipeEditorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const recipeStore = useRecipeContext();

  const [servings, ingredients, onServingsChange, onAllIngredientsUnitChange] =
    useStore(
      recipeStore,
      useShallow((s) => [
        s.servings,
        s.ingredients,
        s.onServingsChange,
        s.onAllIngredientsUnitChange,
      ]),
    );

  const handleSave = () => {
    setIsOpen(false);
  };

  const handleAllIngredientsToGramClick = () => {
    onAllIngredientsUnitChange("g");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className={triggerClassName}>
          Rediger opskrift
        </Button>
      </DialogTrigger>
      <DialogContent className="my-10 sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Rediger opskrift</DialogTitle>
          <DialogDescription>
            Her kan du redigere opskriften. Du kan enten vælge at skalere hele
            opskriften ved at ændre &quot;Mængde&quot;, eller skalere en
            enkelt ingrediens ved hjælp af felterne nedenfor. Hvis du skalerer med
            en enkelt ingrediens, vil resten af ingredienserne opdatere til
            passe.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-8 py-4">
          <div className="flex items-center gap-4">
            <Label htmlFor="servings" className="text-right">
              Antal
            </Label>
            <div className="col-span-3 flex items-center gap-2">
              <Button
                variant="outline"
                type="button"
                onClick={() => {
                  onServingsChange(Math.ceil(servings - 1));
                }}
              >
                <MinusIcon />
              </Button>
              <DeferredNumberInput
                id="servings"
                value={parseFloat(formatAmount(servings))}
                onChange={onServingsChange}
                className="w-20 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              <Button
                variant="outline"
                type="button"
                onClick={() => {
                  onServingsChange(Math.floor(servings + 1));
                }}
              >
                <PlusIcon />
              </Button>
            </div>
          </div>
          <div className="border-t pt-8">
            <div className="mb-4 flex items-center justify-between">
              <TypographyH4 as="h3">Ingredienser</TypographyH4>
              <Button
                variant="outline"
                onClick={handleAllIngredientsToGramClick}
              >
                Sæt alle til gram
              </Button>
            </div>

            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40%]">Ingrediens</TableHead>
                  <TableHead className="w-[30%]">Mængde</TableHead>
                  <TableHead className="w-[30%]">Enhed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ingredients
                  .filter((i) => isDefined(i.amount) && isDefined(i.id))
                  .map((ingredient) => (
                    <IngredientEditor
                      key={ingredient.id}
                      ingredient={ingredient}
                    />
                  ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={onReset}>
            Nulstil
          </Button>
          <Button type="submit" onClick={handleSave}>
            Gem
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
