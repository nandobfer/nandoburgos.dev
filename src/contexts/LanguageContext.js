import { createContext, useState } from "react";

const LanguageContext = createContext({});

export default LanguageContext;


export const LanguageContextProvider = ({children}) => {
    const [value, setValue] = useState('english')

    return (
        <LanguageContext.Provider value={{value, setValue}}>
            {children}
        </LanguageContext.Provider>
    )
}