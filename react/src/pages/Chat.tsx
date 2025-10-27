import MessageList from "../components/MessageList/MessageList"
import MessageForm from "../components/MessageForm"
import UserList from "../components/UserList"
import { useUser } from "../context/UserNameContext"
import { useSocket } from "../hooks/useSocket"

const Chat: React.FC = () => {
  const { username } = useUser() // берём имя пользователя из контекста
  const { messages, users, sendMessage } = useSocket(username)

  return (
    <div className="chat">
      <UserList users={users} currentUser={username} />
      <MessageList messages={messages} currentUser={username} />
      <MessageForm onSend={sendMessage} />
    </div>
  );
};

export default Chat
