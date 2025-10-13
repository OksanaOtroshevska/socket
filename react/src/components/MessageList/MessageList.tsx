import "./MessageList.css"
import Message from "./Message"
import DateBlock from "./Date"

// MessageList - это компонент React, который отображает список сообщений
// Внутри компонента используется пользовательский хук useSocket для установления соединения с сервером WebSocket
// Компонент возвращает JSX-разметку, которая включает в себя компонент Date и два компонента Message

interface MessageData {
  id: number
  text: string
  author: string
  isOwn?: boolean
}

function MessageList() {
  const messages: MessageData[] = [
    { id: 1, author: "Оксана", text: "Привет!" },
    { id: 2, author: "Алекс", text: "Привет, как дела?" }
  ];

  return (
    <div className="message-list">
      <DateBlock date="25 September" />
      <Message author="Оксана" text="Привет!" />
      <Message author="Алекс" text="Привет, как дела?" />
    </div>
  )
}

export default MessageList
