self.onmessage = async function (e) {
  const delay = (duration = 5) => {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  };
  const n = 1000;
  const tasks = new Array(n).fill(delay);
  await Promise.all(tasks);
  self.postMessage({ result: "success" });
};
