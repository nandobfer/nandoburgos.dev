import { useContext } from "react"
import LoginContext from "../contexts/LoginContext"

export const useLogin = () => {
    const loginContext = useContext(LoginContext);

    return loginContext;
}