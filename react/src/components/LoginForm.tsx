import { useState } from "react";
import Button from "../shared/Button"
import TextField from "../shared/TextField"

function LoginForm() {

  const state = useState(""); 
  const username = state[0]; 
  const setUsername = state[1];

  function onSubmit (evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault() ; // Предотвращает перезагрузку страницы при отправке формы
    alert("Форма отправлена" + username);
  }

// onSubmit- это обработчик события отправки формы
  return (
    <form onSubmit={onSubmit}>
      <TextField value={username} onChange={setUsername} />
      <Button label="Войти" type="submit" />
    </form>
  );
}

export default LoginForm
