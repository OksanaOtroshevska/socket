import { useUser } from "../context/UserNameContext";
import { useState } from "react";

interface MessageFormProps {
       // добавляем сюда currentUser
  onSend?: (text: string) => void; // если планируешь передавать функцию для отправки
}

function MessageForm({ onSend }: MessageFormProps) {
  const [message, setMessage] = useState("");
  const { username } = useUser(); // получаем имя пользователя из контекста


  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    if (!message.trim()) return;

    console.log(`[${username}]: ${message}`);

    if (onSend) onSend(message);
    setMessage(""); // очищаем поле
  }

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Введите сообщение..."
      />
      <button type="submit">Отправить</button>
    </form>
  );
}

export default MessageForm;
