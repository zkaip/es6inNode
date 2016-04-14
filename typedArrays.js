// 直接操作二进制

// 可以用来 文件读取, XHR发送, 从base64中读取文件流
// Getting ArrayBuffers or typed arrays from Base64-encoded strings
// FileReader.prototype.readAsArrayBuffer()
// XMLHttpRequest.prototype.send()


// 把view和buffer结合在一起使用
// DataView  StringView

var buffer = new ArrayBuffer(16)
if (buffer.byteLength == 16) {
  console.log("Yes, it's 16 bytes.");
} else {
  console.log("Oh no, it's the wrong size!");
}

var int32View = new Int32Array(buffer);
for (var i=0; i<int32View.length; i++) {
  int32View[i] = i*2;
}
var int16View = new Int16Array(buffer);

for (var i=0; i<int16View.length; i++) {
  console.log("Entry " + i + ": " + int16View[i]);
}

int16View[0] = 32;
console.log("Entry 0 in the 32-bit array is now " + int32View[0]);

var buffer = new ArrayBuffer(24);

// ... read the data into the buffer ...

var idView = new Uint32Array(buffer, 0, 1);
var usernameView = new Uint8Array(buffer, 4, 16);
var amountDueView = new Float32Array(buffer, 20, 1);

// 转换成普通数组
var typedArray = new Uint8Array( [ 1, 2, 3, 4 ] ),
    normalArray = Array.apply( [], typedArray );
normalArray.length === 4;
normalArray.constructor === Array;
console.log(typedArray)
console.log(normalArray)