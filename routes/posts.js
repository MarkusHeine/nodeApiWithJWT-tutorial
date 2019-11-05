const router = require("express").Router();
const verify = require("./privateRoutes");

router.get("/", verify, (req, res) => {
  res.json({ posts: { title: "first post", description: "jajaja" } });
});

module.exports = router;
