// 实现new

// 1. 创建一个空对象
// 2. 将空对象的隐式原型指向构造函数的prototype
// 3. 将空对象作为构造函数的上下文即this
// 4. 执行构造函数中的代码
// 5. 如果构造函数返回的是一个非原始值，则返回该非原始值，否则返回第一步创建的空对象

const myNew = (constructor, ...args) => {
  const obj = Object.create(constructor.prototype);
  const result = constructor.apply(obj, args);
  if (
    (typeof result === "object" && result !== null) ||
    typeof result == "function"
  ) {
    return result;
  }
  return obj;
};

const test = () => {
  function A(a) {
    this.a = a;
  }

  function B() {
    this.b = 2;
    return {
      b: 3,
    };
  }

  function C() {
    this.c = 2;

    return [1, 2, 3];
  }

  function D() {
    this.d = 2;

    return () => {};
  }

  function E() {
    this.e = 2;

    return null;
  }

  const obj = myNew(A, 1);
  console.log(obj.a); // 1
  const obj2 = myNew(B);
  console.log(obj2.b); // 2

  const obj3 = myNew(C);
  const new3 = new C();
  console.log(obj3); // [1, 2, 3]
  console.log(new3); // [1, 2, 3]

  const obj4 = myNew(D);
  const new4 = new D();
  console.log(obj4); // () => {}
  console.log(new4); // () => {}

  const obj5 = myNew(E);
  const new5 = new E();
  console.log(obj5); // { e: 2 }
  console.log(new5); // { e: 2 }
};

test();
