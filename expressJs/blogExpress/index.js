// const express = require("express");
// const path = require("path");

// const app = express();
// const port = 1000;

// app.use(express.static(path.join(__dirname, "static")));

// app.use("/", require(path.join(__dirname, "routes/blog.js")));

// app.get("/about", (req, res) => {
//   // res.send("This is an about");
//   // res.sendFile(path.join(__dirname, "index.html"));
//   res.send({ harry: 34, rahul: 36 });
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
const jwt = require("jsonwebtoken");

const createToken = async () => {
  const token = await jwt.sign(
    { _id: "dfjhgnm68dsfbns5r435" },
    "xnbdfkjsahdbgefxbdfuyewt6"
  );
  console.log(token);

  const decoded = await jwt.verify(token, "xnbdfkjsahdbgefxbdfuyewt6");
  console.log(decoded);
};
createToken();
