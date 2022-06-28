const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("This is an about");
});

app.get("/home", (req, res) => {
  res.send("welcome to my own world");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const myURL = new URL("https://developer.mozilla.org/en-US/docs/Learn?123");
console.log(myURL.host); //developer.mozilla.org:61
console.log(myURL.hostname); //developer.mozilla.org
console.log(myURL.href); //https://developer.mozilla.org:61/en-US/docs/Learn/
console.log(myURL.origin); //https://developer.mozilla.org
console.log(myURL.pathname); ///en-US/docs/Learn/

const myURL1 = new URL("https://example.org/abc/xyz?123");
console.log(myURL1.pathname); //abc/xyz
myURL.pathname = "/abcdef";
console.log(myURL1.href); //https://example.org/abcdef?123

// const u = new URL("https://example.org");
// u.protocol = "http";
// console.log(u.href);
