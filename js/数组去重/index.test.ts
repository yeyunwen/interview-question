import { test, expect } from "vitest";
import { uniqueArray } from ".";

test("数组去重", () => {
  const a = [
    {
      id: 1,
      name: "张三",
    },
    {
      id: 2,
      name: "李四",
    },
    {
      id: 1,
      name: "张三",
    },
    {
      id: 2,
      name: "李四",
      age: 18,
    },
  ];

  expect(uniqueArray(a)).toEqual([
    {
      id: 1,
      name: "张三",
    },
    {
      id: 2,
      name: "李四",
    },
    {
      id: 2,
      name: "李四",
      age: 18,
    },
  ]);
});
