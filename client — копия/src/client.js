import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

const form = document.querySelector("#form");
const textarea = document.querySelector("#textarea");
const messages = document.querySelector("#messages");
const socketId = document.querySelector("#socketId");


//form.addEventListener - это событие отправки формы
//event.preventDefault() - это отмена стандартного поведения формы
//const message = textarea?.value - это получение значения из текстового поля
//textarea.value = "" - это очистка текстового поля
form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = textarea?.value;
    textarea.value = "";

//socket.emit - это отправка сообщения на сервер
//"chat" - это название события
//message - это данные которые мы отправляем на сервер
    socket.emit("chat", message);
});

socket.on("connect", () => {
    if (socketId) {
        socketId.textContent = `Your socket ID: ${socket.id}`;
    }
});

//socket.on - это событие получения сообщения от сервера
//"chat" - это название события
//(message) => { ... } - это функция которая выполняется при получении сообщения
//document.createElement("p") - это создание нового элемента p
//p.textContent = message - это добавление текста в элемент p
//messages.appendChild(p) - это добавление элемента p в div с id messages
socket.on("chat", (message) => {
    const p = document.createElement("p");
    p.textContent = message;
    messages.appendChild(p);
});

