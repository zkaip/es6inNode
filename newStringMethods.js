console.log(String.raw `Hi\n!`)
var name = "Bob";
console.log(String.raw `Hi\n${name}!`)
var str = "\u1E9B\u0323";
// 四种 Unicode 正规形式 "NFC", "NFD", "NFKC", 以及 "NFKD" 其中的一个, 默认值为 "NFC".
console.log(str.normalize("NFC"))
'ABC'.codePointAt(1);          // 66
'\uD800\uDC00'.codePointAt(0); // 65536
console.log(String.fromCodePoint(194564))
console.log("abc".repeat(2))
console.log('Blue Whale'.includes('blue'))


var str = "To be, or not to be, that is the question.";

console.log(str.startsWith("To be"));         // true
console.log(str.startsWith("not to be"));     // false
console.log(str.startsWith("not to be", 10)); // true
