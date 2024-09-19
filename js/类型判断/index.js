const getType = (obj) => {
  if (obj === null) return "null";
  if (typeof obj === "object") {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  } else {
    return typeof obj;
  }
};

const test = () => {
  console.log(getType(123));
  console.log(getType("123"));
  console.log(getType(null));
  console.log(getType(undefined));
  console.log(getType([]));
  console.log(getType({}));
  console.log(getType(function () {}));
  console.log(getType(new Date()));
  console.log(getType(new RegExp()));
};

test();
