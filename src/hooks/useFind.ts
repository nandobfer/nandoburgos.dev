import { useSheets } from "./useSheets"
import { useTerminal } from "./useTerminal"

export const useFind = () => {
    const { sheets } = useSheets()
    const terminal = useTerminal()

    const find = (command: string) => {
        const search = command.split("find ")[1]
        const results = sheets
            .filter(
                (sheet) => sheet.title.includes(search) || sheet.keywords.includes(search) || sheet.code.includes(search)
            )
            .map((sheet) => `${sheet.id} - ${sheet.language.name} - ${sheet.title}`)

        if (results.length > 0) {
            terminal.stdout.setContentTitle(`"${search}"`)
            terminal.stdout.setContent(results)
            terminal.stdout.setOpen(true)
        } else {
            terminal.stdout.setContent([])
            terminal.stdout.setOpen(false)
        }

        terminal.setShell("find ")
    }

    return find
}
