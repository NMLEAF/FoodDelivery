import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// app config
const app = express();
const port = 4000;

// DB connection
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// API endpoints
app.use("/api/v1/food", foodRouter);

app.get("/", (req, res) => {
  res.send({
    data: "These is the data",
  });
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port} ...`);
});
