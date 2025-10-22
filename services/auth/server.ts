import express from "express";
import dotenv from "dotenv";
import healthRouter from "./routes/health";

dotenv.config();

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
const app = express();

app.use(express.json());
app.use("/api/health", healthRouter);

// Basic root
app.get("/", (_req, res) => res.json({ name: "quantum-auth", status: "ok" }));

// Start server
app.listen(PORT, () => {
  console.log(`Auth service listening on port ${PORT}`);
});