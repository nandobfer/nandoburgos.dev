export const useCommandsUsage = () => {
    const usages = [
        {
            id: 1,
            command: "cd",
            usage: '"cd path" to navigate to path. if path is code/language, language will be activated',
        },
        {
            id: 2,
            command: "user",
            usage: '"user username" => "user password" to login. "user" to print the current user, if any',
        },
        {
            id: 3,
            command: "logout",
            usage: '"logout" to log out',
        },
        {
            id: 4,
            command: "find",
            usage: '"find text" text can be any string present on title, code or keywords of a sheet',
        },
        {
            id: 5,
            command: "help",
            usage: '"help" list current featured commands and their usages',
        },
        {
            id: 6,
            command: "adduser",
            usage: '"adduser username password name" add a new user. is required to be authenticated',
        },
        {
            id: 7,
            command: "delete",
            usage: `"delete id" delete a sheet code by it's id`,
        },
        {
            id: 8,
            command: "addsheet",
            usage: `"opens empty sheet modal`,
        },
    ]

    return usages
}
