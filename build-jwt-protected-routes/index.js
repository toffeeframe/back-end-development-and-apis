import express from "express";
import helmet from "helmet";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";

const PORT = process.env.PORT;
const app = express();

app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Auth API is running" });
});

app.use((err, req, res, next) => {
  res.status(err.status ?? 500).json({ "error": err.message });
  next();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});

