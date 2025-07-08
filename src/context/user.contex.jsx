import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <UserContext.Provider value={{ currentIndex, setCurrentIndex }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
