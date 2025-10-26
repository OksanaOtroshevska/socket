import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserNameContext } from "./context/UserNameContext";
import Welcome from "./pages/Welcome";
import Chat from "./pages/Chat";

function App() {
  const [username, setUsername] = useState<string>("");

  return (
    <UserNameContext.Provider value={username}>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome setUsername={setUsername} />} />
          <Route path="/chat" element={<Chat username={username} />} />
        </Routes>
      </Router>
    </UserNameContext.Provider>
  );
}

export default App;
