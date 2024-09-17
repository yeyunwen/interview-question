/**
 * 依次完成所有任务
 * 所有任务完成后，可以得到所有任务的结果
 * 需要返回两个方法，start 开启任务， stop 暂停任务
 * 每个任务具有原子性，即不可中断，只能在两个任务之间中断
 * @param  {...() => void | Promise<void>} tasks 任务列表，每个任务无参、异步
 * @returns { start: () => void, pause: () => void }
 */
export const processTasks = (...tasks) => {
  let isRunning = false;
  let currentTaskIndex = 0;
  const result = [];
  return {
    start() {
      return new Promise(async (resolve) => {
        if (isRunning) {
          return;
        }
        isRunning = true;
        while (currentTaskIndex < tasks.length) {
          const task = tasks[currentTaskIndex];
          const r = await task();
          result.push(r);
          currentTaskIndex++;
          if (!isRunning) {
            return;
          }
        }
        isRunning = false;
        resolve(result);
      });
    },
    pause() {
      isRunning = false;
    },
  };
};
