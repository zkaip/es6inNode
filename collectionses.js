'use strict'
console.log('--------start Map---------')
const myMap = new Map()
const keyString = "a string",
    keyObj = {},
    keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");
myMap.set(NaN, "not a number");

console.log(myMap.get(keyString))    // "value associated with 'a string'"
console.log(myMap.get(keyObj))       // "value associated with keyObj"
console.log(myMap.get(keyFunc))      // "value associated with keyFunc"

console.log(myMap.get("a string"))   // "value associated with 'a string'"
console.log(myMap.get({}))           // undefined, because keyObj !== {}
console.log(myMap.get(function() {}))// undefined, because keyFunc !== function () {}

console.log(myMap.get(NaN))
var otherNaN = Number("foo");
console.log(myMap.get(otherNaN)) // NaN !== NaN true

console.log('---------for each--------')
myMap.forEach(function(value, key) {
  console.log(key + " = " + value);
}, myMap)

console.log('---------for each key--------')

for (var key of myMap.keys()) {
  console.log(key);
}

console.log('---------for each value--------')

for (var value of myMap.values()) {
  console.log(value);
}

console.log('---------for each key--------')

for (let entry of myMap.entries()) {
  console.log(entry[0] + " = " + entry[1]);
}

console.log(myMap.size)
console.log('--------end Map---------')

console.log('--------start WeakMap---------')
var wm1 = new WeakMap(),
    wm2 = new WeakMap(),
    wm3 = new WeakMap();
var o1 = {},
    o2 = function(){},
    o3 = new Object();

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // a value can be anything, including an object or a function
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // keys and values can be any objects. Even WeakMaps!

console.log(wm1.get(o2)) // "azerty"
console.log(wm2.get(o2)) // undefined, because there is no value for o2 on wm2
console.log(wm2.get(o3)) // undefined, because that is the set value

console.log(wm1.has(o2)) // true
console.log(wm2.has(o2)) // false
console.log(wm2.has(o3)) // true (even if the value itself is 'undefined')

wm3.set(o1, 37);
console.log(wm3.get(o1)) // 37

console.log(wm1.has(o1)) // true
wm1.delete(o1);
console.log(wm1.has(o1)) // false
console.log('--------end WeakMap---------')
console.log('--------start Set---------')
var mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add("some text");

console.log(mySet.has(1)) // true
console.log(mySet.has(3)) // false, 3没有被添加到set中
console.log(mySet.has(5))              // true
console.log(mySet.has(Math.sqrt(25)))  // true
console.log(mySet.has("Some Text".toLowerCase())) // true

console.log(mySet.size) // 3

console.log(mySet.delete(5)) // 从set中移除5
console.log(mySet.has(5))    // false, 5已经被移除

console.log(mySet.size) // 2, 我们刚刚移除了一个值

console.log('-----------Array for Set---------')
var myArray = ["value1", "value2", "value3"];
var mySet = new Set(myArray);
console.log(mySet.has("value1")) // returns true

// var myArr = [v for (v of mySet)]; // [1, "some text"]
var myArr = Array.from(mySet);

console.log('--------for each Set-------')
// 按顺序输出：1, "some text" 
for (var item of mySet) console.log(item);
// 按顺序输出：1, "some text" 
for (var item of mySet.keys()) console.log(item);
// 按顺序输出：1, "some text" (键与值相等)
for (var item of mySet.values()) console.log(item);


console.log('--------end Set---------')

console.log('--------start WeakSet---------')

var ws = new WeakSet();
var obj = {};
var foo = {};

ws.add(obj);

console.log(ws.has(obj)) // true
console.log(ws.has(foo))    // false, 对象 foo 并没有被添加进 ws 中 

console.log(ws.delete(obj)) // true 从集合中删除 window 对象
console.log(ws.has(obj))    // false, window 对象已经被删除了

console.log('--------end WeakSet---------')
