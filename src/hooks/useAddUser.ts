import { useSnackbar } from "burgos-snackbar"
import { useApi } from "./useApi"
import { useTerminal } from "./useTerminal"
import { AxiosResponse } from "axios"
import { useAuthentication } from "./useAuthentication"

export const useAddUser = () => {
    const terminal = useTerminal()
    const api = useApi()
    const { snackbar } = useSnackbar()
    const { authentication } = useAuthentication()

    const addUser = (command: string) => {
        if (!authentication) {
            terminal.setShell("")
            terminal.setPlaceholder("unauthorized")
            return
        }

        const args = command.split(" ")
        args.shift()
        const username = args.shift()
        const password = args.shift()
        const name = args.join(" ")

        if (!username || !password) {
            // terminal.setShell('')
            terminal.stdout.setOpen(true)
            terminal.stdout.setContentTitle('"adduser"')
            terminal.stdout.setContent(["username and password are required"])
        } else {
            terminal.stdout.setOpen(false)
            terminal.setShell("")
            terminal.setPlaceholder(`adding ${username}`)

            api.user.add({
                data: { username, password },
                callback: (response: AxiosResponse) => {
                    if (!response.data.error) {
                        snackbar({ severity: "success", text: `user ${username} added successfully` })
                        terminal.close()
                    } else {
                        snackbar({ severity: "error", text: `user ${username} already registered` })
                        terminal.setShell("adduser ")
                    }
                },
            })
        }
    }

    return addUser
}
