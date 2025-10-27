import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

const users = new Map(); // <socket.id, username>

io.on("connection", (socket) => {
  console.log("Новый пользователь подключен", socket.id);

    socket.on("chat", (msg) => {
    // если createdAt нет, добавляем
    if (!msg.createdAt) {
      msg.createdAt = new Date().toISOString();
    }
    io.emit("chat", msg); // рассылаем всем
  });

  // получаем имя от клиента
  socket.on("register", (username) => {
    users.set(socket.id, username);
    io.emit("users", Array.from(users.values())); // рассылаем обновлённый список
  });

  // при отключении
  socket.on("disconnect", () => {
    console.log("Отключился:", socket.id);
    users.delete(socket.id);
    io.emit("users", Array.from(users.values())); // обновляем список
  });
});

server.listen(5000, () => {
  console.log("🚀 Сервер запущен на порту 5000");
});