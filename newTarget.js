'use strict'
function Foo() {
  if (!new.target) throw "Foo() must be called with new";
  console.log("Foo instantiated with new");
}

// 检测是否是使用 new 来构造函数
// throws "Foo() must be called with new"
try{Foo()}catch(err){console.log(err)}
new Foo(); // logs "Foo instantiated with new"

class A {
  constructor() {
    console.log(new.target.name);
  }
}

class B extends A { constructor() { super(); } }

var a = new A(); // logs "A"
var b = new B(); // logs "B"