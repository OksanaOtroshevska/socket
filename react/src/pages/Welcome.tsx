import "./Welcome.css";
import LoginForm from "../components/LoginForm";

function Welcome() {
  return (
    <div className="welcome">
      <h2 className="welcome_title">Добро пожаловать!</h2>
      <LoginForm />
    </div>
  );
}

export default Welcome
