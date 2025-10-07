//импортируем библиотеки
//express - это библиотека для создания сервера на node.js
//http - это встроенная библиотека для создания http сервера
//socket.io - это библиотека для создания сокет сервера
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");


const PORT = 3000;

//создаем приложение на express
//создаем http сервер на базе express
//создаем сокет сервер на базе http сервера
const app = express();
const httpServer = createServer(app);
const socket = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
})

//request- это что приходит от клиента
//response - это что мы отправляем клиенту
//таким образом мы настроили наш express, что бы он работал как сервер по http
app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

//говорим, что при подключении нового клиента, мы должны слушать его сообщения
//и при получении сообщения, отправлять его всем подключенным клиентам
//connection.on("chat" - это событие получения сообщения от клиента
//socket.emit("chat" - это отправка сообщения всем клиентам
socket.on("connection", (connection) => {
    console.log("New client connected", connection.id);

connection.on("chat", msgData => {
  socket.emit("chat", msgData)
})

});

//говорим, что наш сервер должен слушать 3000 порт на нашем компьютере
httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});