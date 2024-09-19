/**
 * 数组去重
 * 两个属性相同的对象也认为是重复的
 */
export const uniqueArray = (arr: any[]) => {
  const result: any[] = [];

  outer: for (const item of arr) {
    for (const r of result) {
      if (equals(item, r)) {
        continue outer;
      }
    }

    result.push(item);
  }

  return result;
};

const isPrimitive = (v: any) => {
  return v === null || (typeof v !== "object" && typeof v !== "function");
};

const equals = (v1: any, v2: any) => {
  if (isPrimitive(v1) && isPrimitive(v2)) {
    return Object.is(v1, v2);
  }
  const entries1 = Object.entries(v1);
  const entries2 = Object.entries(v2);
  if (entries1.length !== entries2.length) {
    return false;
  }
  for (const [k, v] of entries1) {
    if (!v2.hasOwnProperty(k)) {
      return false;
    }
    if (!equals(v, v2[k])) {
      return false;
    }
  }
  return true;
};

// const uniqueArray = (arr: any[]) => {
//   return [...new Set(arr)];
// };
