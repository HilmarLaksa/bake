import { defineField, defineType } from "sanity";
import { ingredientTypeName } from "./constants";

const fields = [
  defineField({
    name: "name",
    type: "string",
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "type",
    type: "string",
    options: {
      list: [
        { title: "Dry", value: "dry" },
        { title: "Wet", value: "wet" },
        { title: "Other", value: "other" },
      ],
      layout: "radio",
    },
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: "weights",
    type: "ingredientWeights",
  }),
];

export const ingredientType = defineType({
  name: ingredientTypeName,
  title: "Ingredient",
  type: "document",
  icon: () => "🥒",
  fields,
});
