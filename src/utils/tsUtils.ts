// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const exhaustiveMatchingGuard = (_: never) => {
  throw new Error("exhaustive matching error");
};

export function capitalize(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
