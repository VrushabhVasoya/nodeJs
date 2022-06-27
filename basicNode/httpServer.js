const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-type", "text/html");
  res.end("<h1>This is a heading</h1>");
});
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
