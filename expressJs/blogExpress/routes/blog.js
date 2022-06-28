const express = require("express");
const path = require("path");
const blogs = require("../data/blogs");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/blogHome.html"));
});

router.get("/blogpost/:slug", (req, res) => {
  myBlog = blogs.filter((e) => {
    return e.slug === req.params.slug;
  });
  console.log(myBlog);
  res.sendFile(path.join(__dirname, "../views/blogPage.html"));
});

module.exports = router;
