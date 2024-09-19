// 实现构造函数只能被new调用

// 通过new的target属性判断

function Person(name) {
  if (new.target !== Person) {
    throw new Error("必须使用 new 命令生成实例");
  }
  this.name = name;
}

const test = () => {
  const p1 = new Person("p1");
  console.log(p1); // { name: 'p1' }
  const p2 = Person("p2"); // Error: 必须使用 new 命令生成实例
};

test();
