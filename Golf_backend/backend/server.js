import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import drawRoutes from "./routes/drawRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/draw", drawRoutes);


app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});