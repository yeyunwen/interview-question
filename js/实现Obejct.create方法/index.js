// 创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。

/**
 * 创建一个新的对象，该对象继承自指定的原型对象，并具有可选的属性描述符
 * @param {Object | null} proto - 新创建对象的原型
 * @param {Object | undefined} propertiesObject - 包含属性描述符的对象
 * @returns {Object} - 新创建的对象
 */
const create = (proto, propertiesObject) => {
  if (typeof proto !== "object" && typeof proto !== "function") {
    throw new TypeError("Object prototype may only be an Object or null");
  }

  function F() {}
  F.prototype = proto;

  const obj = new F();

  if (propertiesObject !== undefined) {
    Object.defineProperties(obj, propertiesObject);
  }

  return obj;
};

const test = () => {
  const O = {
    a: 1,
  };
  const obj = create(O);

  const obj2 = create(O, {
    b: {
      value: 2,
    },
  });

  console.log(obj.a); // 1

  console.log(obj2.a); // 1
  console.log(obj2.b); // 2
};

test();
