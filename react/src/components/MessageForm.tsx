import { useState } from "react";
import Button from "../shared/Button";
import TextField from "../shared/TextField";

interface MessageFormProps {
       // добавляем сюда currentUser
  onSend: (text: string) => void; // если планируешь передавать функцию для отправки
}

const MessageForm: React.FC<MessageFormProps> = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <TextField
        value={text}
        onChange={setText}
        placeholder="Введите сообщение"
        variant="textarea"
      />
      <Button label="Отправить" type="submit" />
    </form>
  );
}

export default MessageForm;
