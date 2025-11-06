import { useEffect, useState, useRef } from "react"
import { io, Socket } from "socket.io-client"

export interface MessageData {
  id: string
  author: string
  text: string
  createdAt: string
}

export const useSocket = (currentUser: string) => {
  const [messages, setMessages] = useState<MessageData[]>([])
  const [users, setUsers] = useState<string[]>([])
  const socketRef = useRef<Socket | null>(null)

  useEffect(() => {
    const socket = io("http://localhost:5000", { transports: ["websocket"] })
    socketRef.current = socket

    console.log("✅ Connected socket:", socket.id)

    socket.on("chat", (msg: MessageData) => {
      setMessages(prev => [...prev, msg])
    })

    socket.on("users", (userList: string[]) => {
      setUsers(userList)
    })

    // регистрация пользователя
    if (currentUser) {
      socket.emit("register", currentUser)
    }

    return () => {
      socket.disconnect()
    }
  }, [currentUser])

  const sendMessage = (text: string) => {
    const socket = socketRef.current
    if (!socket) return

    const message: MessageData = {
      id: `${socket.id}-${Date.now()}`,
      author: currentUser,
      text,
      createdAt: new Date().toISOString(),
    }

    // просто отправляем серверу — не добавляем в state вручную
    socket.emit("chat", message)
  }

  return { messages, users, sendMessage }
}

export default useSocket

