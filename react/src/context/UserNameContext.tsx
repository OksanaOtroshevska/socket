import React, { createContext, useContext, useState } from "react";

interface UserContextValue {
  username: string;
  setUsername: (name: string) => void;
}

const UserNameContext = createContext<UserContextValue>({
  username: "",
  setUsername: () => {},
});

export const useUser = () => useContext(UserNameContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [username, setUsername] = useState<string>("");

  return (
    <UserNameContext.Provider value={{ username, setUsername }}>
      {children}
    </UserNameContext.Provider>
  );
};