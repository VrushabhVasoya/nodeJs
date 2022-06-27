const EventEmitter = require("node:events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("waterFull", () => {
  console.log("turn off the motor!!");
  setTimeout(() => {
    console.log("Its a gentle reminder");
  }, 3000);
});
console.log("script is running");
myEmitter.emit("waterFull");
