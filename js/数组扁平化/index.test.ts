import { test, expect } from "vitest";
import { flattenArray } from ".";

test("数组扁平化", () => {
  expect(flattenArray([1, 2, [3, 4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
});
