import { useLocation, useNavigate } from "react-router-dom"
import { useCurrentLanguage } from "./useCurrentLanguage"
import { useLanguages } from "./useLanguages"
import { useTerminal } from "./useTerminal"

export const useCd = () => {
    const terminal = useTerminal()
    const navigate = useNavigate()
    const location = useLocation()

    const cd = (command: string) => {
        if (command.split(" ").length == 1) {
            navigate("/")
        } else {
            const destination = command.split(" ")[1]

            if (location.pathname.includes("code") && destination[0] != "/") {
                navigate(`/code/${destination}`)
            } else {
                navigate(destination)
            }
        }

        terminal.close()
    }

    return cd
}
