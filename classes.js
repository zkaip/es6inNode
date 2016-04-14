'use strict'

// 原型方法
class Polygon {
  constructor(height, width){
    this.height = height
    this.width = width
  }

  get area() {
    return this.calcArea()
  }

  calcArea() {
    return this.height * this.width
  }
}

var aPolygon = new Polygon(5, 6);
console.log('area:',aPolygon.area)
console.log('calcArea:',aPolygon.calcArea())

// 静态方法
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx*dx + dy*dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2))

// 继承
class Animal {
  constructor (name) {
    this.name = name
  }
  answer(){
    console.log('My name is ' + this.name + ' .')
  }
  speak(){
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    super.speak()
    console.log(this.name + ' barks.');
  }
}

const dog1 = new Dog('Doge')
dog1.answer()
dog1.speak()