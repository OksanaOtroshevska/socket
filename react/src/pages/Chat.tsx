import "./Chat.css";
import MessageForm from "../components/MessageForm";
import MessageList from "../components/MessageList/MessageList";

function Chat () {
  return (
    <div className="chat">
    <MessageList />
    <MessageForm />
    </div>
  );
}

export default Chat;