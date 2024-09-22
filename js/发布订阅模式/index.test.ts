import { test, expect, describe } from "vitest";
import { EventBus } from "./index";

describe("发布订阅模式", () => {
  const eventBus = new EventBus();

  test("事件订阅", () => {
    const callback = () => {
      console.log("Callback executed");
    };
    eventBus.on("event1", callback);
    expect(eventBus.emit("event1")).toContain(callback);
  });

  test("事件发布", () => {
    const callback = () => {
      console.log("Callback executed");
    };
    eventBus.on("event2", callback);
    eventBus.emit("event2");
  });

  test("事件取消订阅", () => {
    const callback = () => {
      console.log("Callback executed");
    };
    eventBus.on("event3", callback);
    eventBus.off("event3", callback);
    expect(eventBus.emit("event3")).not.toContain(callback);
  });

  test("事件只执行一次", () => {
    const callback = () => {
      console.log("Callback executed");
    };
    eventBus.once("event4", callback);
    expect(eventBus.emit("event4")).toContain(callback);
    eventBus.emit("event4");
    eventBus.emit("event4");
    expect(eventBus.emit("event4")).not.toContain(callback);
  });
});
