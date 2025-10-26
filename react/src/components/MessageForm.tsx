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
    if (onSend) {
      onSend(message);
    } else {
      alert(`${currentUser} отправил сообщение: ${message}`);
    }
    setMessage("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={message}
        onChange={setMessage}
        variant="textarea"
        placeholder="Введите сообщение"
      />
      <Button label="Отправить" type="submit" />
    </form>
  );
}

export default MessageForm;
