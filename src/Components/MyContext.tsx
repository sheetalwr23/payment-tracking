// Context.tsx
import React, { createContext, useState } from "react";

// Define context type
interface ContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create context with initial value
const MyContext = createContext<ContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const ContextProvider: React.FC = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <MyContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to use the context
export const useAuth = () => React.useContext(MyContext);

export default MyContext;
