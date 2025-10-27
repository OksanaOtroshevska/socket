import MessageList from "../components/MessageList/MessageList";
import MessageForm from "../components/MessageForm";
import { useUser } from "../context/UserNameContext";
import { useSocket } from "../hooks/useSocket";

const Chat: React.FC = () => {
  const { username } = useUser(); // берём имя пользователя из контекста
  const { messages, sendMessage } = useSocket(username);

  return (
    <div className="chat">
      <MessageList messages={messages} currentUser={username} />
      <MessageForm onSend={sendMessage} />
    </div>
  );
};

export default Chat;