import { Command } from "../definitions/commands"
import { useCd } from "./useCd"
import { useFind } from "./useFind"
import { useHelp } from "./useHelp"
import { useLogout } from "./useLogout"
import { useUser } from "./useUser"

export const useCommands = () => {
    const commands: Command[] = [
        {
            id: 1,
            command: "cd",
            callback: useCd(),
            usage: '"cd path" to navigate to path. if path is code/language, language will be activated',
        },
        {
            id: 2,
            command: "user",
            callback: useUser(),
            usage: '"user username" => "user password" to login. "user" to print the current user, if any',
        },
        {
            id: 3,
            command: "logout",
            callback: useLogout(),
            usage: '"logout" to log out',
        },
        {
            id: 4,
            command: "find",
            callback: useFind(),
            usage: '"find text" text can be any string present on title, code or keywords of a sheet',
        },
        {
            id: 5,
            command: "help",
            callback: useHelp(),
            usage: '"help" list current featured commands and their usages',
        },
    ]

    return commands
}
