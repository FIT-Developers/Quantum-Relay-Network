import express from "express";
import dotenv from "dotenv";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import healthRouter from "./routes/health";

dotenv.config();

const PORT = process.env.PORT ? Number(process.env.PORT) : 4100;
const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, { cors: { origin: "*" } });

app.use(express.json());
app.use("/api/health", healthRouter);

// Simple socket namespace for telemetry & rooms
io.of("/telemetry").on("connection", (socket) => {
  console.log("Telemetry client connected:", socket.id);

  socket.on("joinRoom", (room: string) => {
    socket.join(room);
    socket.emit("joined", { room });
  });

  socket.on("disconnect", () => {
    console.log("Telemetry client disconnected:", socket.id);
  });
});

// Basic root
app.get("/", (_req, res) => res.json({ name: "quantum-network", status: "ok" }));

server.listen(PORT, () => {
  console.log(`Network service listening on port ${PORT}`);
});