import Button from "../shared/Button"
import TextField from "../shared/TextField"
import { useState } from "react"

// React.FormEvent<HTMLFormElement> - это тип события формы в React. Он используется для типизации объекта события,
// который передается в обработчик события формы, такого как onSubmit. Этот тип обеспечивает доступ к свойствам и методам,
// специфичным для событий форм, таких как предотвращение стандартного поведения формы (например, перезагрузка страницы при отправке).
function MessageForm() {

  const state = useState("") // useState - это хук, который позволяет добавлять состояние в функциональные компоненты React
  const message = state[0] // userMessage - это текущее значение состояния
  const setMessage = state[1] // setMessage - это функция, которая позволяет обновить значение состояния

  function onSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault() // Предотвращает перезагрузку страницы при отправке формы
    alert("Сообщение отправлено:" + message);
  }

  return (
    <form onSubmit={onSubmit}>
      <TextField value={message} onChange={setMessage} variant="textarea" />
      <Button label="Отправить" type="submit" />
    </form>
  )
}

export default MessageForm
