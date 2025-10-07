import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

const form = document.querySelector("#form");
const textarea = document.querySelector("#textarea");
const messages = document.querySelector("#messages");
const socketId = document.querySelector("#socketId");

// спрашиваем имя пользователя
const username = prompt("Введите ваше имя:") || "Аноним";

// при подключении выводим socket ID
socket.on("connect", () => {
  if (socketId) {
    socketId.textContent = `Your socket ID: ${socket.id}`;
  }
});

socket.on("connect", () => {
  socketId.textContent = `🟢 Online | ID: ${socket.id}`;
});
socket.on("disconnect", () => {
  socketId.textContent = `🔴 Offline`;
});


// отправка формы
form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const message = textarea?.value;

  // не отправляем пустое сообщение
  if (!message || !message.trim()) return;

  // формируем объект сообщения
  const msgData = {
    id: socket.id,
    user: username,
    text: message.trim(),
  };

  // отправляем на сервер
  socket.emit("chat", msgData);

  // очищаем поле
  textarea.value = "";
});


// отправка по Ctrl+Enter
textarea.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "Enter") {
    event.preventDefault();
    form.dispatchEvent(new Event("submit"));
  }
});

// при получении сообщения
socket.on("chat", (msgData) => {
  const div = document.createElement("div");
  div.classList.add("message");

  // определяем, кто отправил сообщение
  if (msgData.id === socket.id) {
    div.classList.add("my-message");
  } else {
    div.classList.add("other-message");
  }

  // добавляем текст
  div.textContent = `${msgData.user}: ${msgData.text}`;

  // добавляем в контейнер
  messages.appendChild(div);

  // автопрокрутка вниз
  messages.scrollTop = messages.scrollHeight;
});


