import { useSnackbar } from "burgos-snackbar"
import { useAuthentication } from "./useAuthentication"
import { useTerminal } from "./useTerminal"

export const useLogout = () => {
    const terminal = useTerminal()
    const { authentication, setAuthentication } = useAuthentication()
    const { snackbar } = useSnackbar()

    const logout = () => {
        if (authentication) {
            setAuthentication(null)
            terminal.close()
            snackbar({ severity: "warning", text: "logged out" })
        } else {
            terminal.setPlaceholder("there is no user logged")
            terminal.setShell("")
        }
    }

    return logout
}
