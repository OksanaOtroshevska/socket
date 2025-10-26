import MessageList from "../components/MessageList/MessageList";
import MessageForm from "../components/MessageForm";

interface ChatProps {
  username: string;
}

function Chat({ username }: ChatProps) {
  return (
    <div className="chat">
      <MessageList currentUser={username} />
      <MessageForm currentUser={username} />
    </div>
  );
}

export default Chat;