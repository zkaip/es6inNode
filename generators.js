function* a(i) {
  yield i + 1
  yield i + 2
  yield i + 3
}

function* generator(i) {
  yield i
  yield* a(i)
  yield i + 5
}

var gen = generator(0)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
