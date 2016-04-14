console.log(typeof Symbol() === 'symbol')
console.log(typeof Symbol('foo') === 'symbol')
console.log(typeof Symbol.iterator === 'symbol')
console.log(Symbol("foo") === Symbol("foo"))

var obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";

// symbol 不会在for...in中出现
for (var i in obj) {
   console.log(i); // logs "c" and "d"
}