import "./MessageList.css"
import Message from "./Message"
import DateBlock from "./Date"

// MessageList - это компонент React, который отображает список сообщений
// Внутри компонента используется пользовательский хук useSocket для установления соединения с сервером WebSocket
// Компонент возвращает JSX-разметку, которая включает в себя компонент Date и два компонента Message

interface MessageData {
  user: string;
  text: string;
  time?: string;
}

interface MessageListProps {
  messages: MessageData[];
  currentUser: string;
}

function MessageList({ messages, currentUser }: MessageListProps) {
  return (
    <div className="message-list">
      <DateBlock date="25 September" />
      {messages.map((msg, index) => (
        <Message
          key={index}
          author={msg.user}
          text={msg.text}
          isOwn={msg.user === currentUser}
        />
      ))}
    </div>
  );
}

export default MessageList
