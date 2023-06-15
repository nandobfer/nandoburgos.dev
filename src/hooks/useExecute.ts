import { useCommands } from "./useCommands"
import { useEffect, useState } from "react"
import { useTerminal } from "./useTerminal"

export const useExecute = () => {
    const commands = useCommands()
    const terminal = useTerminal()

    const checkFocus = (ref: React.RefObject<HTMLInputElement>) => {
        if (document.activeElement === ref.current) return true
    }

    const execute = (shell: string) => {
        const command = commands.filter((item) => item.command == shell.split(" ")[0])[0]
        console.log(command)

        if (command) {
            command.callback(shell)
        } else {
            terminal.setPlaceholder(`command "${shell}" not registered`)
            terminal.setShell("")
        }
    }

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (!checkFocus(terminal.searchFieldRef) && event.key === "/") {
                terminal.setModal(true)
            }

            if (terminal.modal) {
                if (!checkFocus(terminal.stdoutInputRef) && event.key === "Enter") {
                    execute(terminal.shell.trim())
                }
            }
        }

        window.addEventListener("keydown", onKeyDown)

        return () => {
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [terminal.modal, terminal.shell])

    return execute
}
