import "./Message.css";

interface MessageProps {
  author: string;
  text: string;
  isOwn?: boolean; // свойство для определения цвета "моего" сообщения
}

function Message({ author, text, isOwn = false }: MessageProps) {
  return (
    <div className={`message ${isOwn ? "own" : ""}`}>
      <div className="author">{author}</div>
      <div className="text">{text}</div>
    </div>
  );
}


export default Message;