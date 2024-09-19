// instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。

const myInstanceof = (obj, constructor) => {
  let proto = Object.getPrototypeOf(obj);
  while (proto !== null) {
    if (proto === constructor.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
};

const test = () => {
  class A {}
  const a = new A();
  const b = {};

  console.log(myInstanceof(a, A)); // true
  console.log(myInstanceof(b, A)); // false
};

test();
