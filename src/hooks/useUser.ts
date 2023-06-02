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
        } else {
            const [placeholder, user] = command.split(" ")
            if (user) {
                setUsername(user)
                terminal.setInputType("password")
                terminal.setShell("")
                terminal.setPlaceholder(`${placeholder} password`)
            } else {
                terminal.setPlaceholder(JSON.stringify(authentication, null, 2))
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
                } else {
                    snackbar({ severity: "error", text: "login failed" })
                }
            },
            finallyCallback: () => terminal.close(),
        })
    }

    return user
}
