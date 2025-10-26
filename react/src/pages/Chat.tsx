import "./Chat.css";
import { useState } from "react";
import MessageForm from "../components/MessageForm";
import MessageList from "../components/MessageList/MessageList";

interface ChatMessage {
  user: string;
  text: string;
  time?: string;
}

function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const currentUser = "Oksana"; // позже можно получать из контекста/логина

  function handleSend(text: string) {
    const newMsg: ChatMessage = {
      user: currentUser,
      text,
      time: new Date().toLocaleTimeString().slice(0,5),
    };
    setMessages((prev) => [...prev, newMsg]);
  }

  return (
    <div className="chat">
      <MessageList messages={messages} currentUser={currentUser} />
      <MessageForm onSend={handleSend} />
    </div>
  );
}

export default Chat;