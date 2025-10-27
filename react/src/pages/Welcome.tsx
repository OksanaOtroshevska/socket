import { useState } from "react";
import { useUser } from "../context/UserNameContext"
import { useNavigate } from "react-router-dom";
import TextField from "../shared/TextField";
import Button from "../shared/Button";
import "./Welcome.css";

const Welcome: React.FC = () => {
  const [name, setName] = useState<string>("");
  const { setUsername } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Введите имя, пожалуйста");
      return;
    }

    setUsername(name); // сохраняем имя в контексте
    navigate("/chat"); // переходим в чат
  };

  return (
    <div className="welcome">
      <h1 className="welcome__title">Добро пожаловать в чат!</h1>

      <form className="welcome__form" onSubmit={handleSubmit}>
        <TextField
          value={name}
          onChange={setName}
          placeholder="Введите имя"
        />
        <Button label="Войти" type="submit" />
      </form>
    </div>
  );
};

export default Welcome;
