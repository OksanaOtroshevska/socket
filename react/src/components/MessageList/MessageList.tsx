import "./MessageList.css";
import Message from "./Message";
import DateBlock from "./Date";

interface MessageData {
  id: number;
  author: string;
  text: string;
}

interface MessageListProps {
  currentUser: string;
}

function MessageList({ currentUser }: MessageListProps) {
  const messages: MessageData[] = [
    { id: 1, author: "Оксана", text: "Привет!" },
    { id: 2, author: "Алекс", text: "Привет, как дела?" }
  ];

  return (
    <div className="message-list">
      <DateBlock date="25 September" />
      {messages.map((msg) => (
        <Message
          key={msg.id}
          author={msg.author}
          text={msg.text}
          isOwn={msg.author === currentUser}
        />
      ))}
    </div>
  );
}

export default MessageList;
