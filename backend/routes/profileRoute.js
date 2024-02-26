const express = require("express");
const router = express.Router();
const { getProfile } = require("../controllers/profileController");
const { verifyAccessToken } = require("../middleware/checkAccessToken.js");

// Routes beginning with /api/vi/profile
router.get("/", verifyAccessToken, getProfile);

module.exports = router;
