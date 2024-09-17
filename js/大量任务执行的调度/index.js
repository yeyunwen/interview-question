/**
 * 运行一个耗时任务
 * 如果需要异步执行，请返回Promise
 * 要尽快完成任务、同时不要让页面产生卡顿
 * 尽量兼容更多的浏览器
 * @param {(args: any) => void} task
 * @returns
 */
export const runTask = (task) => {
  return new Promise((resolve) => {
    _runTask(task, resolve);
  });
};

const _runTask = (task, callback) => {
  const _runTaskWithRequestIdleCallback = (task, callback) => {
    requestIdleCallback((dealine) => {
      while (dealine.timeRemaining() > 0) {
        task();
      }
      callback();
    });
  };

  const _runTaskWithRequestAnimationFrame = (task, callback) => {
    const startTime = Date.now();
    const frame = () => {
      const time = Date.now();
      if (time - startTime < 16.6) {
        task();
        callback();
      } else {
        _runTaskWithRequestAnimationFrame(task, callback);
      }
    };
    requestAnimationFrame(frame);
  };

  if (typeof requestIdleCallback === "function") {
    _runTaskWithRequestIdleCallback(task, callback);
  } else if (typeof requestAnimationFrame === "function") {
    _runTaskWithRequestAnimationFrame(task, callback);
  } else {
    _runTaskWithSetTimeout(task, callback);
  }
};
