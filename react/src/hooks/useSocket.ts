import { useEffect, useState } from "react"
import { io, Socket } from "socket.io-client"

export interface MessageData {
  id: string
  author: string
  text: string
}

let socket: Socket | null = null

export const useSocket = (currentUser: string) => {
  const [messages, setMessages] = useState<MessageData[]>([])
  const [users, setUsers] = useState<string[]>([])

  useEffect(() => {
    if (!socket) {
      socket = io("http://localhost:5000")
      console.log("🟢 Подключен новый socket:", socket.id)

      socket.on("chat", (msg: MessageData) => {
        setMessages(prev => [...prev, msg])
      })

      socket.on("users", (userList: string[]) => {
        setUsers(userList)
      })
    }

    // если пользователь задан, отправляем имя серверу
    if (currentUser) {
      socket.emit("register", currentUser)
    }

    return () => {
      // ничего не отключаем, чтобы соединение не разрывалось при ререндере
    }
  }, [currentUser])

  const sendMessage = (text: string) => {
    if (!socket) return
    const id = socket.id || `temp-${Date.now()}`
    const message: MessageData = { id, author: currentUser, text }
    socket.emit("chat", message)
    setMessages(prev => [...prev, message])
  }

  return { messages, users, sendMessage }
}

export default useSocket
