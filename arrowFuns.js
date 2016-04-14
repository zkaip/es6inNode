var a = () => 'a'
var b = () => {
  console.log('b run')
  return 'b'
}
var c = () =>({a:'nihao', b: ' a!'})
console.log(a())
console.log(b())
console.log(c())