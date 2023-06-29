const express = require("express");
const router = express.Router();

const user = {
  email: "turaymusaa@gmail.com",
  password: "!Love2code",
};

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === user.email && password === user.password) {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ error: "Invalid email or password" });
  }
});
module.exports = router;
