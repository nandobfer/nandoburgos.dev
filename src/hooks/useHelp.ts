import { useCommandsUsage } from "./useCommandsUsage"
import { useTerminal } from "./useTerminal"

export const useHelp = () => {
    const commands = useCommandsUsage()
    const terminal = useTerminal()
    const output = terminal.stdout

    const help = (command: string) => {
        const list = commands.slice(0, -1).map((item) => `${item.id} - ${item.command} - ${item.usage}`)
        output.setContentTitle(commands.slice(-1)[0].usage)
        output.setContent(list)
        output.setOpen(true)
        terminal.setShell("")
    }

    return help
}
