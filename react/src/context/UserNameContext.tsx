import React, { createContext, useContext, useState } from "react";

interface UserContextValue {
  username: string;
  setUsername: (name: string) => void;
}

const UserContext = createContext<UserContextValue>({
  username: "",
  setUsername: () => {},
});

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [username, setUsername] = useState<string>("");
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};