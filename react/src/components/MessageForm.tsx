import "./MessageForm.css";
import Button from "../shared/Button"
import TextField from "../shared/TextField"
import { useState } from "react"

// React.FormEvent<HTMLFormElement> - это тип события формы в React. Он используется для типизации объекта события,
// который передается в обработчик события формы, такого как onSubmit. Этот тип обеспечивает доступ к свойствам и методам,
// специфичным для событий форм, таких как предотвращение стандартного поведения формы (например, перезагрузка страницы при отправке).
interface MessageFormProps {
  onSend: (text: string) => void;
}

function MessageForm({ onSend }: MessageFormProps) {
  const [message, setMessage] = useState("");

  function onSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    if (message.trim() === "") return;
    onSend(message);
    setMessage("");
  }

  return (
    <form onSubmit={onSubmit} className="message-form">
      <TextField
        value={message}
        onChange={setMessage}
        variant="textarea"
      />
      <Button label="Отправить" type="submit" />
    </form>
  );
}

export default MessageForm
