import url from "node:url";
const myURL = new URL("https://example.org");
myURL.pathname = "/a/b/c";
myURL.search = "?d=e";
myURL.hash = "#fgh";

console.log(myURL);
console.log(myURL.href);

const url1 = new URL(
  "https://anonymous:vrushabh@developer.mozilla.org/en-US/docs/Web/API/URL/password"
);
console.log(url1.password);
