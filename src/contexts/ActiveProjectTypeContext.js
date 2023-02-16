import { createContext, useState } from "react";

const ActiveProjectTypeContext = createContext({});

export default ActiveProjectTypeContext;


export const ActiveProjectTypeProvider = ({children}) => {
    const [value, setValue] = useState(null)

    return (
        <ActiveProjectTypeContext.Provider value={{value, setValue}}>
            {children}
        </ActiveProjectTypeContext.Provider>
    )
}