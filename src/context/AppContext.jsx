import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {  
  const [activeSection, setActiveSection] = useState("chat");

  return (
    <AppContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);