import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export interface MessageData {
  id: string;
  author: string;
  text: string;
}

export const useSocket = (currentUser: string) => {
  const [messages, setMessages] = useState<MessageData[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);

    newSocket.on("message", (msg: MessageData) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = (text: string) => {
    if (socket) {
      const message: MessageData = {
        id: socket.id || Math.random().toString(36).substring(2, 9), // запасной id
        author: currentUser,
        text,
      };
      socket.emit("message", message);
      setMessages((prev) => [...prev, message]); // локально показываем сразу
    }
  };

  return { messages, sendMessage };
}

export default useSocket;