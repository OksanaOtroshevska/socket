import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../shared/TextField";
import Button from "../shared/Button";

interface WelcomeProps {
  setUsername: (name: string) => void;
}

function Welcome({ setUsername }: WelcomeProps) {
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    if (name.trim()) {
      setUsername(name.trim());
      navigate("/chat");
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <TextField value={name} onChange={setName} placeholder="Введите имя" />
      <Button label="Войти" type="submit" />
    </form>
  );
}

export default Welcome;
