require("babel-runtime/regenerator")
require("webpack-hot-middleware/client?reload=true")
require("./main.css")
require("./index.html")
debugger
var a = async () => {
  await console.log("hello world");
}

let c = 1;
let b = c-- + --c;
console.log(b);
