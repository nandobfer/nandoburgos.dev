import { useContext } from "react"
import AuthenticationContext from "../contexts/authenticationContext"

export const useAuthentication = () => {
    const authenticationContext = useContext(AuthenticationContext)
    const authentication = authenticationContext.value
    const setAuthentication = authenticationContext.setValue

    return { authentication, setAuthentication }
}
