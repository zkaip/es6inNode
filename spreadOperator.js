function f (x,y,z) {
  console.log(x,y,z)
}

const args = [0,1,2]
f(...args)
var arr1 = ['a','b','c']
arr1.push(...args)
console.log(arr1)

// var nodeList = document.querySelectorAll('div');
// var array = [...nodeList];