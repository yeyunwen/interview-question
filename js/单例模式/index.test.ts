import { test, expect, describe } from "vitest";
import { singPerson, SingPerson } from ".";

describe("单例模式", () => {
  test("by new", () => {
    const singleton = new SingPerson("张三", 18);
    const singleton2 = new SingPerson("李四", 19);
    expect(singleton).toBe(singleton2);
    expect(singleton2.name).toBe("张三");
    expect(singleton2.age).toBe(18);
  });

  test("by construct", () => {
    const singleton2 = new singPerson.constructor("李四", 19);
    expect(singleton2).toBe(singPerson);

    expect(singleton2.name).toBe("张三");
    expect(singleton2.age).toBe(18);
  });
});
