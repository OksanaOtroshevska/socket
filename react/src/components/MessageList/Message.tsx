import "./Message.css";

interface MessageProps {
  author: string;
  text: string;
  isOwn?: boolean;
}

const Message: React.FC<MessageProps> = ({ author, text, isOwn }) => {
  return (
    <div className={`message ${isOwn ? "own" : ""}`}>
      <b>{author}:</b> {text}
    </div>
  );
};

export default Message;