const express = require("express");
const fs = require("fs");

const app = express();
const port = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/users.json");
});

app.post("/register", (req, res) => {
  const jsonString = req.body;
  res.send(jsonString);
  console.log(jsonString);

  fs.readFile("users.json", (err, data) => {
    const jsonData = JSON.parse(data);
    jsonData.push(jsonString);
    console.log(jsonData);
    fs.writeFile("users.json", JSON.stringify(jsonData), (err) => {
      if (err) throw err;
    });
  });
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/user.json");
});

app.post("/login", (req, res) => {
  let firstname = req.body.firstname;
  let password = req.body.password;
  res.send(`Username: ${firstname} Password: ${password}`);

  res.send("welcome");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
