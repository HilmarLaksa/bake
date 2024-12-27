import { defineField, defineType } from "sanity";

const fields = [
  defineField({
    name: "liter",
    type: "number",
    description: "Amount of grams in one liter.",
    readOnly: ({ document }) => {
      return false;
    },
  }),
  defineField({
    name: "tablespoon",
    type: "number",
    description: "Amount of grams in one tablespoon. (ss)",
    readOnly: ({ document }) => {
      return false;
    },
  }),
  defineField({
    name: "teaspoon",
    type: "number",
    description: "Amount of grams in one teaspoon. (ts)",
    readOnly: ({ document }) => {
      return false;
    },
  }),
];

export const ingredientWeightsType = defineType({
  name: "ingredientWeights",
  title: "Weights",
  type: "object",
  fields,
  options: {
    collapsible: true,
    columns: 2,
  },
});
