import MessageList from "../components/MessageList/MessageList";
import MessageForm from "../components/MessageForm";
import { useUser } from "../context/UserNameContext";

const Chat: React.FC = () => {
  const { username } = useUser(); // берём имя пользователя из контекста

  return (
    <div className="chat">
      <MessageList currentUser={username} />
      <MessageForm currentUser={username} />
    </div>
  );
};

export default Chat;