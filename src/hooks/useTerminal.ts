import { useContext, useEffect, useState } from "react"
import TerminalContext from "../contexts/terminalContext"
import { useNavigate } from "react-router-dom"
import { useAuthentication } from "./useAuthentication"
import { useSnackbar } from "burgos-snackbar"

export const useTerminal = () => {
    const { setAuthentication } = useAuthentication()
    const { snackbar } = useSnackbar()
    const terminal = useContext(TerminalContext)
    const navigate = useNavigate()
    const [login, setLogin] = useState(false)

    const checkFocus = () => {
        if (document.activeElement === terminal.searchFieldRef.current) return true
    }

    const termLogout = () => {
        snackbar({ severity: "warning", text: "logout successful" })
        setAuthentication(false)
        terminal.setShell("")
        terminal.setInputType("text")
        terminal.setModal(false)
    }

    const termLogin = () => {
        if (!login) {
            setLogin(true)
            terminal.setShell("")
            terminal.setInputType("password")
        } else {
            setLogin(false)
            terminal.setShell("")
            terminal.setInputType("text")
            terminal.setModal(false)

            if (terminal.shell == "mfux6xpj") {
                setAuthentication(true)
                snackbar({ severity: "success", text: "login successful" })
            } else {
                snackbar({ severity: "error", text: "invalid password" })
            }
        }
    }

    const execute = () => {
        if (!login) {
            console.log(terminal.shell)
            const splited = terminal.shell.split(" ")

            if (splited.length == 1) {
                const command = terminal.shell

                if (command == "login") {
                    termLogin()
                    return
                } else if (command == "logout") {
                    termLogout()
                    return
                } else if (command == "cd") {
                    navigate('/')
                } else {
                    console.log(terminal.shell)
                }
            } else if (splited.length == 2) {
                const command = splited[0]
                const argument = splited[1]

                if (command == "cd") navigate(argument)
            }

            terminal.setModal(false)
            terminal.setShell("")
        } else {
            termLogin()
        }
    }

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            const focused_search = checkFocus()

            if (!focused_search && event.key === "/") {
                terminal.setModal(true)
            }

            if (terminal.modal) {
                if (event.key === "Enter") {
                    execute()
                }
            }
        }

        window.addEventListener("keydown", onKeyDown)

        return () => {
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [terminal.modal, terminal.shell])

    return terminal
}
