const express = require("express");
const router = express.Router();
const {
  getTasks,
  getTask,
  postTask,
  putTask,
  deleteTask,
} = require("../controllers/taskController");
const { verifyAccessToken } = require("../middleware/checkAccessToken");

// Routes beginning with /api/v1/tasks
router.get("/", verifyAccessToken, getTasks);
router.get("/:taskId", verifyAccessToken, getTask);
router.post("/", verifyAccessToken, postTask);
router.put("/:taskId", verifyAccessToken, putTask);
router.delete("/:taskId", verifyAccessToken, deleteTask);

module.exports = router;
