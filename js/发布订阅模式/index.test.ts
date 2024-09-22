import { test, expect, describe } from "vitest";
import { EventBus } from "./index";

describe("发布订阅模式", () => {
  const eventBus = new EventBus();

  test("事件订阅/发布", () => {
    let count = 0;
    const callback = () => {
      count++;
      console.log("Callback executed");
    };
    eventBus.on("event1", callback);
    eventBus.emit("event1");
    expect(count).toBe(1);
    eventBus.emit("event1");
    expect(count).toBe(2);
  });

  test("事件取消订阅", () => {
    let count = 0;
    const callback = () => {
      count++;
      console.log("Callback executed");
    };
    eventBus.on("event3", callback);
    eventBus.emit("event3");
    expect(count).toBe(1);
    eventBus.off("event3", callback);
    eventBus.emit("event3");
    expect(count).toBe(1);
  });

  test("事件只执行一次", () => {
    let count = 0;
    const callback = () => {
      count++;
      console.log("Callback executed");
    };
    eventBus.once("event4", callback);
    eventBus.emit("event4");
    expect(count).toBe(1);
    eventBus.emit("event4");
    eventBus.emit("event4");
    expect(count).toBe(1);
  });
});
