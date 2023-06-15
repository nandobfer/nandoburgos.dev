import colors from "../colors"
import { useCommandsUsage } from "./useCommandsUsage"
import { useTerminal } from "./useTerminal"

export const useHelp = () => {
    const commands = useCommandsUsage()
    const terminal = useTerminal()
    const output = terminal.stdout

    const help = (command: string) => {
        const list = commands.filter((item) => item.command != "help")
        output.setContentTitle(commands.filter((item) => item.command == "help")[0].usage)
        output.setContent(
            list.map((cmd) => {
                return (
                    <p style={{ color: colors.primary }}>
                        {cmd.command} <span style={{ color: colors.secondary }}>-</span>{" "}
                        <span style={{ color: colors.text.primary }}>{cmd.usage}</span>
                    </p>
                )
            })
        )
        output.setOpen(true)
        terminal.setShell("")
    }

    return help
}
