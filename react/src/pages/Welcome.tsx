import { useState } from "react"
import { useUser } from "../context/UserNameContext"
import { useNavigate } from "react-router-dom"
import TextField from "../shared/TextField"
import Button from "../shared/Button"
import "./Welcome.css"
import logo from "../assets/logo.png"

const Welcome: React.FC = () => {
  const [name, setName] = useState<string>("")
  const { setUsername } = useUser()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim()) {
      alert("Please enter your name")
      return
    }

    setUsername(name)
    navigate("/chat")
  }

  return (
    <div className="welcome">
      <div className="welcome__card">
        <img src={logo} alt="PingMe" className="welcome__logo" />
        <h1 className="welcome__title">Ping me — let’s start chatting!</h1>

        <form className="welcome__form" onSubmit={handleSubmit}>
          <TextField value={name} onChange={setName} placeholder="What’s your name?" />
          <Button label="Join Chat" type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Welcome
