import { createContext, useState } from "react";

const LoginContext = createContext({});

export default LoginContext;


export const LoginProvider = ({children}) => {
    const [value, setValue] = useState(false)

    return (
        <LoginContext.Provider value={{value, setValue}}>
            {children}
        </LoginContext.Provider>
    )
}