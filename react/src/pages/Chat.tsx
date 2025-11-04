import MessageList from "../components/MessageList/MessageList"
import MessageForm from "../components/MessageForm"
import UserList from "../components/UserList"
import { useUser } from "../context/UserNameContext"
import { useSocket } from "../hooks/useSocket"
import "./Chat.css"
import logo from "../assets/logo.png"

const Chat: React.FC = () => {
  const { username } = useUser()
  const { messages, users, sendMessage } = useSocket(username)

  return (
    <div className="chat-container">
      <div className="chat-box">
        <header className="chat-header">
          <div className="chat-header-left">
            <div className="chat-logo">
              <img src={logo} alt="PingMe" className="logo-img" />
            </div>
            <div>
              <h2 className="chat-title">Ping me — let’s start chatting!</h2>
              <div className="chat-subtitle"></div>
            </div>
          </div>
          <div className="chat-username">
            You’re chatting as: <strong>{username}</strong>
          </div>
        </header>

        <div className="chat-content">
          <aside className="chat-users">
            <UserList users={users} currentUser={username} />
          </aside>
          <main className="chat-messages">
            <MessageList messages={messages} currentUser={username} />
          </main>
        </div>

        <footer className="chat-footer">
          <MessageForm onSend={sendMessage} />
        </footer>
      </div>
    </div>
  )
}

export default Chat
