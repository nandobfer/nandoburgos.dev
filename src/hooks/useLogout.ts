import { useSnackbar } from "burgos-snackbar"
import { useAuthentication } from "./useAuthentication"
import { useTerminal } from "./useTerminal"

export const useLogout = () => {
    const terminal = useTerminal()
    const { setAuthentication } = useAuthentication()
    const { snackbar } = useSnackbar()

    const logout = () => {
        setAuthentication(null)
        terminal.close()
        snackbar({ severity: "warning", text: "logged out" })
    }

    return logout
}
