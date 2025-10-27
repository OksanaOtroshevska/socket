import Button from "../shared/Button";
import TextField from "../shared/TextField";
import { useState } from "react";

interface MessageFormProps {
  currentUser: string;      // добавляем сюда currentUser
  onSend?: (text: string) => void; // если планируешь передавать функцию для отправки
}

function MessageForm({ currentUser, onSend }: MessageFormProps) {
  const [message, setMessage] = useState("");

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    if (!message.trim()) return;
    onSend?.(message); // вызываем callback, если он передан
    setMessage(""); // очищаем поле
  }

  return (
 <form className="message-form" onSubmit={handleSubmit}>
      <TextField
        value={message}
        onChange={setMessage}
        placeholder={`Сообщение от ${currentUser}`}
        variant="textarea"
      />
      <Button label="Отправить" type="submit" />
    </form>
  );
}

export default MessageForm;
