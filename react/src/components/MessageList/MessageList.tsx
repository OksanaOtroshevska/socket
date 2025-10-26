import "./MessageList.css"
import Message from "./Message"
import DateBlock from "./Date"

// MessageList - это компонент React, который отображает список сообщений
// Внутри компонента используется пользовательский хук useSocket для установления соединения с сервером WebSocket
// Компонент возвращает JSX-разметку, которая включает в себя компонент Date и два компонента Message


interface MessageListProps {
  messages: {
    id: string;
    author: string;
    text: string;
  }[];
  currentUser: string;
}

function MessageList({ messages, currentUser }: MessageListProps) {
  return (
    <div className="message-list">
      <DateBlock date="Сегодня" />
      {messages.map((msg) => (
        <Message
          key={msg.id + msg.text}
          author={msg.author}
          text={msg.text}
          isOwn={msg.author === currentUser}
        />
      ))}
    </div>
  );
}

export default MessageList
