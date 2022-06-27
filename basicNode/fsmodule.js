const fs = require("node:fs");

// fs.readFile("file.txt", (err, data) => {
//   console.log(err, data.toString());
// });

// const a = fs.readFileSync("file.txt");
// console.log(a.toString());

// fs.writeFile("file2.txt", "welcome to exhibyte", () => {
//   console.log("this is task");
// });

const b = fs.writeFileSync("file2.txt", "welcome to exhibyte solution");
console.log(b);
console.log("vrushabh");
