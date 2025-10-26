import "./LoginForm.css";
import { useState } from "react";
import Button from "../shared/Button";
import TextField from "../shared/TextField";

export interface LoginFormProps {
  onLogin: (username: string) => void;
}

function LoginForm({ onLogin }: LoginFormProps) {
  const [username, setUsername] = useState("");

  function onSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const name = username.trim();
    if (!name) return;
    onLogin(name);
  }

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <TextField value={username} onChange={setUsername} placeholder="Введите имя" />
      <Button label="Войти" type="submit" />
    </form>
  );
}

export default LoginForm;
