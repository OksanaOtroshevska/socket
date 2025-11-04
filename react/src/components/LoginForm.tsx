import "./LoginForm.css"
import { useState } from "react"
import Button from "../shared/Button"
import TextField from "../shared/TextField"

export interface LoginFormProps {
  onLogin: (username: string) => void
}

function LoginForm({ onLogin }: LoginFormProps) {
  const [username, setUsername] = useState("")

  function onSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()
    const name = username.trim()
    if (!name) return
    onLogin(name)
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onSubmit}>
        <h2 className="login-title">Welcome to Ping Me — let’s start chatting!</h2>
        <TextField value={username} onChange={setUsername} placeholder="What’s your name?" />
        <Button label="Let’s Go →" type="submit" />
      </form>
    </div>
  )
}

export default LoginForm
