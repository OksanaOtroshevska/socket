import React, { useEffect, useRef, useState } from "react"
import "./MessageForm.css"

interface MessageFormProps {
  onSend: (text: string) => void
  maxLength?: number
}

const MessageForm: React.FC<MessageFormProps> = ({ onSend, maxLength = 1000 }) => {
  const [text, setText] = useState<string>("")
  const inputRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    onSend(trimmed)
    setText("")
    inputRef.current?.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.key === "Enter") {
      e.preventDefault()
      handleSubmit(e as any)
    }
  }

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <textarea
        ref={inputRef}
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
        maxLength={maxLength}
        className="message-input"
      />
      <button type="submit" className="send-button">
        ➤
      </button>
    </form>
  )
}

export default MessageForm
