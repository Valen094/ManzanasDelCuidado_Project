import { createContext, useState } from "react";

const Contexto = createContext();

export const LogContext = ({children}) => {
    const [isLogged, setIsLogged] = useState(true);
    const [user, setUser] = useState({});
  return (
    <Contexto.Provider value={{isLogged, setIsLogged, user, setUser}}>
        {children}
    </Contexto.Provider>
  )
}

export default Contexto;



