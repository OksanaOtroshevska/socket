import "./Message.css"

interface MessageProps {
  author: string
  text: string
  isOwn?: boolean
  date?: string
}

const Message: React.FC<MessageProps> = ({ author, text, isOwn, date }) => {
  return (
    <div className={`message ${isOwn ? "own" : ""}`}>
      <div className="message__author">{author}</div>
      <div className="message__text">{text}</div>
      <div className="message__date">{date}</div> {/* отображение даты */}
    </div>
  )
}

export default Message