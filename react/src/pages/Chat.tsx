import MessageList from "../components/MessageList/MessageList";
import MessageForm from "../components/MessageForm";
import { useUser } from "../context/UserNameContext";

function Chat() {
  const { username } = useUser(); // берём имя пользователя из контекста

  return (
    <div className="chat">
      <MessageList currentUser={username} />
      <MessageForm />
    </div>
  );
};

export default Chat;