import colors from "../colors"
import { useSheets } from "./useSheets"
import { useTerminal } from "./useTerminal"

export const useFind = () => {
    const { sheets } = useSheets()
    const terminal = useTerminal()

    const find = (command: string) => {
        const search = command.split("find ")[1]
        const results = sheets.filter(
            (sheet) => sheet.title.includes(search) || sheet.keywords.includes(search) || sheet.code.includes(search)
        )
        // .map((sheet) => `${sheet.id} - ${sheet.language.name} - ${sheet.title}: ${sheet.code}`)

        if (results.length > 0) {
            terminal.stdout.setContentTitle(`"${search}"`)
            terminal.stdout.setContent(
                results.map((sheet) => {
                    return (
                        <p>
                            <span style={{ color: colors.secondary }}>{sheet.id} - </span>
                            <span style={{ color: colors.text.primary, fontWeight: "bold" }}>{sheet.language.name}</span>
                            <span style={{ color: colors.secondary }}> - </span>
                            <span style={{ color: colors.primary }}>{sheet.title}: </span>
                            <span style={{ color: colors.text.primary }}>{sheet.code}</span>
                        </p>
                    )
                })
            )
            terminal.stdout.setOpen(true)
        } else {
            terminal.stdout.setContent([])
            terminal.stdout.setOpen(false)
        }

        terminal.setShell("find ")
    }

    return find
}
