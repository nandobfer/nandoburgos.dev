import { createContext, useEffect, useState } from "react";

const ActiveProjectContext = createContext({});

export default ActiveProjectContext;


export const ActiveProjectProvider = ({children}) => {
    const [value, setValue] = useState({})

    return (
        <ActiveProjectContext.Provider value={{value, setValue}}>
            {children}
        </ActiveProjectContext.Provider>
    )
}