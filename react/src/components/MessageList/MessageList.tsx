import React, { useEffect, useRef } from "react"
import "./MessageList.css"
import Message from "./Message"
import DateBlock from "./Date"

export interface MessageData {
  id: string
  author: string
  text: string
  isOwn?: boolean
}

interface MessageListProps {
  messages: MessageData[]
  currentUser: string
}

const MessageList: React.FC<MessageListProps> = ({ messages, currentUser }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  // автоскролл при новых сообщениях
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    // плавная прокрутка вниз
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" })
  }, [messages.length]) // срабатывает при изменении длины массива

  return (
    <div className="message-list" ref={containerRef}>
      <DateBlock date="Сегодня" />
      {messages.map(msg => (
        <Message key={msg.id + msg.text} author={msg.author} text={msg.text} isOwn={msg.author === currentUser} />
      ))}
    </div>
  )
}

export default MessageList
