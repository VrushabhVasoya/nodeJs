const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-type", "text/html");
  if (req.url == "/") {
    res.statusCode = 200;
    res.end("<h1>This is a heading</h1>");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1>This is a about</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>This page is not found</h1>");
  }
});
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
