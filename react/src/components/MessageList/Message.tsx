import "./Message.css";

interface MessageProps {
  author: string;
  text: string;
  isOwn?: boolean;
}

function Message({ author, text, isOwn }: MessageProps) {
  return (
    <div className={`message ${isOwn ? "my-message" : "other-message"}`}>
      <b>{author}:</b> {text}
    </div>
  );
}

export default Message;