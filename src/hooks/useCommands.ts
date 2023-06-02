import { Command } from "../definitions/commands"
import { useCd } from "./useCd"

export const useCommands = () => {
    const cd = useCd()

    const commands: Command[] = [
        {
            id: 1,
            command: "cd",
            callback: cd,
        },
    ]

    return commands
}
