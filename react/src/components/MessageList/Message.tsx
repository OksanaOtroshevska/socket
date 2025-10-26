import "./Message.css";

interface MessageProps {
  author: string;
  text: string;
  isOwn?: boolean; // свойство для определения цвета "моего" сообщения
}

function Message({ author, text, isOwn }: MessageProps) {
  return (
    <div className={`message ${isOwn ? "own" : "other"}`}>
      <div className="message-author">{author}</div>
      <div className="message-text">{text}</div>
    </div>
  );
}


export default Message;