const express = require("express");
const { signup, login } = require("../controllers/authController");
const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
module.exports = router;
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTk4OGQ4YjFjNjNjM2NlMDQwZTczYyIsImlhdCI6MTcwNDU3NDI3M30.yvY8FQ9bJlZlBDxIP4UhuoLlGDWpriZYhMqw8UJuiy0