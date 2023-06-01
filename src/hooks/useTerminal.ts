import { useContext } from "react"
import TerminalContext from "../contexts/terminalContext"

export const useTerminal = () => {
    const terminalContext = useContext(TerminalContext)
    const { modal, setModal } = terminalContext

    return terminalContext
}
