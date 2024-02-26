const express = require("express");
const { signup, login } = require("../controllers/authController");
const router = express.Router();
//Routes begin with /api/v1/auth
router.post("/signup", signup);
router.post("/login", login);
module.exports = router;
