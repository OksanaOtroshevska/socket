import MessageForm from "../components/MessageForm";
import MessageList from "../components/MessageList/MessageList";

function Chat () {
  return (
    <div>
    <MessageList />
    <MessageForm />
    </div>
  );
}

export default Chat;