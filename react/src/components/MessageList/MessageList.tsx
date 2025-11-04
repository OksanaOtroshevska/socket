import React, { useEffect, useRef } from "react"
import "./MessageList.css"
import Message from "./Message"
import DateBlock from "./Date"

export interface MessageData {
  id: string
  author: string
  text: string
  createdAt: string
  isOwn?: boolean
}

interface MessageListProps {
  messages: MessageData[]
  currentUser: string
}

const MessageList: React.FC<MessageListProps> = ({ messages, currentUser }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Автоскролл при новых сообщениях
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" })
  }, [messages.length])

  const currentDate = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <div className="message-list" ref={containerRef}>
      <DateBlock date={currentDate} /> {/*  теперь дата динамическая */}
      {messages.map(msg => {
        const date = new Date(msg.createdAt)
        const formattedTime = date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
        return (
          <Message
            key={msg.id}
            author={msg.author}
            text={msg.text}
            isOwn={msg.author === currentUser}
            date={formattedTime}
          />
        )
      })}
    </div>
  )
}

export default MessageList
