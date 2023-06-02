import { Command } from "../definitions/commands"
import { useCd } from "./useCd"
import { useLogout } from "./useLogout"
import { useUser } from "./useUser"

export const useCommands = () => {
    const commands: Command[] = [
        {
            id: 1,
            command: "cd",
            callback: useCd(),
        },
        {
            id: 2,
            command: "user",
            callback: useUser(),
        },
        {
            id: 3,
            command: "logout",
            callback: useLogout(),
        },
    ]

    return commands
}
