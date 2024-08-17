import { createContext, useState } from 'react';

export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {

    const [dificultad, setDificultad] = useState("normal");

    return (
        <GlobalContext.Provider value={{
            dificultad,
            setDificultad
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;
