import Date from "./Date";
import Message from "./Message";

// MessageList - это компонент React, который отображает список сообщений
// Внутри компонента используется пользовательский хук useSocket для установления соединения с сервером WebSocket
// Компонент возвращает JSX-разметку, которая включает в себя компонент Date и два компонента Message


function MessageList () {

  return (
    <div>
      <Date />
      <Message />
      <Message />
    </div>
  );
}

export default MessageList;