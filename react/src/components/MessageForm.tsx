import React, { useEffect, useRef, useState } from "react"
import Button from "../shared/Button"
import TextField from "../shared/TextField"

interface MessageFormProps {
  // добавляем сюда currentUser
  onSend: (text: string) => void // если планируешь передавать функцию для отправки
  maxLength?: number
}

const MessageForm: React.FC<MessageFormProps> = ({ onSend, maxLength = 1000 }) => {
  const [text, setText] = useState<string>("")
  const inputRef = useRef<HTMLTextAreaElement | HTMLInputElement | null>(null)

  useEffect(() => {
    // фокус в поле ввода при монтировании
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Ctrl+Enter отправляет (если это textarea)
    if (e.ctrlKey && e.key === "Enter") {
      e.preventDefault()
      const trimmed = text.trim()
      if (!trimmed) return
      onSend(trimmed)
      setText("")
      inputRef.current?.focus()
    }
  }

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <TextField
        value={text}
        onChange={setText}
        placeholder="Введите сообщение"
        variant="textarea"
        ref={inputRef as any} // TextField нужно чуть изменить, чтобы принимать forwarded ref (см. ниже)
        maxLength={maxLength}
        onKeyDown={handleKeyDown as any} // также требуется прокинуть onKeyDown в TextField
      />
      <Button label="Отправить" type="submit" />
    </form>
  )
}

export default MessageForm
