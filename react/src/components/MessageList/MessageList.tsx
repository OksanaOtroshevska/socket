import "./MessageList.css";
import Message from "./Message";
import DateBlock from "./Date";

interface MessageData {
  id: string;
  author: string;
  text: string;
  isOwn?: boolean;
}

interface MessageListProps {
  messages: MessageData[];
  currentUser: string;
}

const MessageList: React.FC<MessageListProps> = ({ messages, currentUser }) => {
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
};

export default MessageList;
