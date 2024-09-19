export const flattenArray = (arr: any[]) => {
  return arr.reduce(
    (pre, cur) =>
      (pre as any[]).concat(Array.isArray(cur) ? flattenArray(cur) : cur),
    []
  );
};
