const singleton = (className: any) => {
  let instance = null;
  const proxy = new Proxy(className, {
    construct(target, args) {
      instance ??= Reflect.construct(target, args);
      return instance;
    },
  });
  className.prototype.constructor = proxy;
  return proxy;
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export const SingPerson = singleton(Person);

export const singPerson = new SingPerson("张三", 18);
