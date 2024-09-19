// 对象浅拷贝
const obj = { a: 1, b: { c: 2 } };
const new1 = Object.assign({}, obj);
const new2 = { ...obj };

// 数组浅拷贝
const arr = [1, 2, 3];
const new3 = arr.slice();
const new4 = Array.from(arr);
const new5 = [].concat(arr);
const new6 = [...arr];

// 深拷贝

const deepClone = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  if (typeof obj === "function") {
    return obj;
  }

  const cloneObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key]);
    }
  }

  return cloneObj;
};
