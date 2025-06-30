const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logOut,
} = require("../controllers/authController");

router.get("/", function (req, res) {
  res.send("hey from user route");
});
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logOut);

module.exports = router;
