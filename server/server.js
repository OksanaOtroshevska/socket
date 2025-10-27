import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Храним пользователей: { socketId: username }
const users = {};

io.on("connection", (socket) => {
  console.log("✅ Новый клиент подключился:", socket.id);

  // Пользователь присоединяется
  socket.on("user:join", (username) => {
    users[socket.id] = username;
    console.log(`👤 ${username} вошёл в чат`);
    io.emit("users:update", Object.values(users)); // отправляем всем список
  });

  // Получение сообщений
  socket.on("chat", (message) => {
    io.emit("chat", message);
  });

  // Пользователь отключился
  socket.on("disconnect", () => {
    const username = users[socket.id];
    if (username) {
      console.log(`❌ ${username} вышел`);
      delete users[socket.id];
      io.emit("users:update", Object.values(users));
    }
  });
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на порту ${PORT}`);
});