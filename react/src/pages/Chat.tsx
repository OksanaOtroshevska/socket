import MessageList from "../components/MessageList/MessageList";
import MessageForm from "../components/MessageForm";
import { useUser } from "../context/UserNameContext";

function Chat() {
  const { username } = useUser();

  return (
    <div className="chat">
      <MessageList currentUser={username} />
      <MessageForm currentUser={username} />
    </div>
  );
}

export default Chat;