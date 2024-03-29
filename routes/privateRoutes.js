const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("accsess denied");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log("verifed: ", verified);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("invalid token");
  }
};
