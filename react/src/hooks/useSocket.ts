import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export interface MessageData {
  id: string;
  author: string;
  text: string;
}

// создаём глобальный сокет один раз
const socket: Socket = io("http://localhost:3000");

export const useSocket = (currentUser: string) => {
  const [messages, setMessages] = useState<MessageData[]>([]);

  useEffect(() => {
    const handleMessage = (msg: MessageData) => {
      setMessages((prev) => [...prev, msg]);
    };

    // подписка на событие
    socket.on("chat", handleMessage);

    // очистка при размонтировании
    return () => {
      socket.off("chat", handleMessage);
    };
  }, []); // пустой массив зависимостей — подписка один раз

  const sendMessage = (text: string) => {
    if (!currentUser) return;

    const message: MessageData = {
      id: socket.id || `temp-${Date.now()}`,
      author: currentUser,
      text,
    };

    socket.emit("chat", message);
    setMessages((prev) => [...prev, message]);
  };

  return { messages, sendMessage };
};

export default useSocket;