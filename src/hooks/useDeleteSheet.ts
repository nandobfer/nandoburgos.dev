import { useSnackbar } from "burgos-snackbar"
import { Sheet } from "../definitions/languages"
import { useApi } from "./useApi"
import { useSheets } from "./useSheets"
import { useTerminal } from "./useTerminal"
import { useRefresh } from "./useRefresh"
import { useAuthentication } from "./useAuthentication"

export const useDeleteSheet = () => {
    const api = useApi()
    const terminal = useTerminal()
    const refresh = useRefresh()
    const { sheets } = useSheets()
    const { snackbar } = useSnackbar()
    const { authentication } = useAuthentication()

    const deleteSheet = (command: string) => {
        if (!authentication) {
            terminal.setShell("")
            terminal.setPlaceholder("unauthorized")
            return
        }

        const [_, id] = command.split(" ")
        const sheet_id = Number(id)
        const sheet: Sheet = sheets.filter((item) => item.id == sheet_id)[0]

        if (sheet) {
            terminal.stdout.setOpen(false)
            terminal.setShell("")
            terminal.setPlaceholder("deleting")
            api.sheets.delete({
                data: sheet,
                callback: (response: { data: Sheet }) => {
                    refresh()
                    snackbar({ severity: "warning", text: "sheet deleted" })
                    terminal.close()
                },
            })
        } else {
            terminal.setShell("")
            terminal.setPlaceholder("invalid sheet id")
        }
    }

    return deleteSheet
}
