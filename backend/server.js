import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import topicRoutes from "./routes/topicRoutes.js";

dotenv.config();
await connectDB();
const app = express();
app.use(express.json());
app.use(morgan("dev"));
const allowed = [process.env.CLIENT_URL || "http://localhost:5173", "http://localhost:5174"];
app.use(cors({ origin: allowed, credentials: true }));

app.get("/", (req, res) => res.send("DSA Sheet API"));
app.use("/api/auth", authRoutes);
app.use("/api/topics", topicRoutes);

const port = process.env.PORT;
app.listen(port, () => console.log(`API running on ${port}`));
