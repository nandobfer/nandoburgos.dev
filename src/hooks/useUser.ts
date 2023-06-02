import { useSnackbar } from "burgos-snackbar"
import { useApi } from "./useApi"
import { useAuthentication } from "./useAuthentication"
import { useTerminal } from "./useTerminal"
import { useState } from "react"

export const useUser = () => {
    const terminal = useTerminal()
    const api = useApi()
    const [username, setUsername] = useState("")
    const { authentication, setAuthentication } = useAuthentication()
    const { snackbar } = useSnackbar()

    const user = (command: string) => {
        if (terminal.inputType == "password") {
            const [placeholder, password] = command.split(" ")
            tryLogin(password)
            terminal.setPlaceholder("validating")
            terminal.setShell("")
        } else {
            const [placeholder, user] = command.split(" ")
            if (user) {
                setUsername(user)
                terminal.setInputType("password")
                terminal.setShell("")
                terminal.setPlaceholder(`${placeholder} password`)
            } else {
                // stdout current user
                const user_string = authentication
                    ? ` ${authentication.id} - ${authentication.username} / ${authentication.name}`
                    : ""
                terminal.setPlaceholder(user_string)
                terminal.setShell("")
            }
        }
    }

    const tryLogin = (password: string) => {
        api.user.login({
            data: { user: username, password },
            callback: (response: { data: User }) => {
                const user = response.data
                if (user) {
                    setAuthentication(user)
                    console.log(user)
                    snackbar({ severity: "success", text: "login successful" })
                    terminal.close()
                } else {
                    snackbar({ severity: "error", text: "login failed" })
                    terminal.setPlaceholder("login failed, try again")
                    terminal.setShell("")
                    terminal.setInputType("text")
                    setUsername("")
                }
            },
        })
    }

    return user
}