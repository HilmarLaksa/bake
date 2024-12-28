import { defineField, defineType } from "sanity";

const fields = [
  defineField({
    name: "liter",
    type: "number",
    description: "Amount of grams in one liter.",
    readOnly: false  
  }),
  defineField({
    name: "tablespoon",
    type: "number",
    description: "Amount of grams in one tablespoon. (ss)",
    readOnly: false
  }),
  defineField({
    name: "teaspoon",
    type: "number",
    description: "Amount of grams in one teaspoon. (ts)",
    readOnly: false    
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
