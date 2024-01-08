const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express();
const connectDb = require("./db/db");
const authRoute = require("./routes/authRoute");
const taskRoute = require("./routes/taskRoute");
const profileRoute = require("./routes/profileRoute");
app.use(cors());
dotenv.config();
app.use(morgan("dev"));
app.use(express.json());
connectDb();
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/task", taskRoute);
app.use("/api/v1/profile", profileRoute);
app.get("/", (req, res) => {
  res.send("Hello world");
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
