import "./Message.css";

interface MessageProps {
  author: string;
  text: string;
  isOwn?: boolean; // свойство для определения цвета "моего" сообщения
}

function Message ({ author, text }: MessageProps) {
  return (
   <div className="message">
      <strong className="message__author">{author}:</strong>
      <span className="message__text">{text}</span>
   </div>
  );
}


export default Message;