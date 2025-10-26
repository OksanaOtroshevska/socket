import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export interface MessageData {
  id: string;
  author: string;
  text: string;
}

export function useSocket(currentUser: string) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<MessageData[]>([]);

  useEffect(() => {
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("Connected:", newSocket.id);
    });

    newSocket.on("message", (message: MessageData) => {
      setMessages((prev) => [...prev, message]);
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
      setMessages((prev: MessageData[]) => [...prev, message]); // ✅ теперь типизировано
    }
  };

  return { messages, sendMessage };
}

export default useSocket;