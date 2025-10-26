import "./Chat.css";
import { useState } from "react";
import { useSocket } from "../hooks/useSocket";
import MessageForm from "../components/MessageForm";
import MessageList from "../components/MessageList/MessageList";

function Chat() {
  const [currentUser] = useState("Оксана");
  const { messages, sendMessage } = useSocket(currentUser);

  function handleSend(text: string) {
    sendMessage(text);
  }

  return (
    <div className="chat">
      <MessageList messages={messages} currentUser={currentUser} />
      <MessageForm onSend={handleSend} />
    </div>
  );
}

export default Chat;