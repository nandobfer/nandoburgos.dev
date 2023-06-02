import { useContext, useEffect, useState } from "react"
import TerminalContext from "../contexts/terminalContext"
import { useNavigate } from "react-router-dom"
import { useAuthentication } from "./useAuthentication"
import { useSnackbar } from "burgos-snackbar"
import { useCurrentLanguage } from "./useCurrentLanguage"
import { useLanguages } from "./useLanguages"
import { useCurrentSheets } from "./useCurrentSheets"
import { useSheets } from "./useSheets"
import { useCommands } from "./useCommands"
import { useExecute } from "./useExecute"

export const useTerminal = () => {
    const { setAuthentication } = useAuthentication()
    const { snackbar } = useSnackbar()
    const { setCurrentLanguage } = useCurrentLanguage()
    const { setCurrentSheets } = useCurrentSheets()
    const { languages } = useLanguages()
    const { sheets } = useSheets()
    const terminal = useContext(TerminalContext)
    const navigate = useNavigate()

    const termLogout = () => {
        snackbar({ severity: "warning", text: "logout successful" })
        setAuthentication(false)
        terminal.setShell("")
        terminal.setInputType("text")
        terminal.setModal(false)
    }

    // const termLogin = () => {
    //     if (!login) {
    //         setLogin(true)
    //         terminal.setShell("")
    //         terminal.setInputType("password")
    //     } else {
    //         setLogin(false)
    //         terminal.setShell("")
    //         terminal.setInputType("text")
    //         terminal.setModal(false)

    //         if (terminal.shell == "mfux6xpj") {
    //             setAuthentication(true)
    //             snackbar({ severity: "success", text: "login successful" })
    //         } else {
    //             snackbar({ severity: "error", text: "invalid password" })
    //         }
    //     }
    // }

    const handleNavigate = (argument: string) => {
        const splited = argument.split("/")
        if (splited.length == 2) {
            const [path, language] = splited

            navigate(path)
            setCurrentLanguage(languages.filter((item) => item.name == language)[0])
        } else if (splited.length == 3) {
            const [path, language, search] = splited
            navigate(path)
            setCurrentLanguage(languages.filter((item) => item.name == language)[0])
            setCurrentSheets(
                sheets.filter(
                    (sheet) => sheet.title.includes(search) || sheet.keywords.includes(search) || sheet.code.includes(search)
                )
            )
        } else {
            navigate(argument)
        }
    }

    // const execute = () => {
    //     if (!login) {
    //         // console.log(terminal.shell)
    //         // const splited = terminal.shell.split(" ")

    //         // if (splited.length == 1) {
    //         //     const command = terminal.shell

    //         //     if (command == "commands") {
    //         //         console.log(commands)
    //         //     }

    //         //     if (command == "login") {
    //         //         termLogin()
    //         //         return
    //         //     } else if (command == "logout") {
    //         //         termLogout()
    //         //         return
    //         //     } else if (command == "cd") {
    //         //         navigate("/")
    //         //     } else {
    //         //         console.log(terminal.shell)
    //         //     }
    //         // } else if (splited.length == 2) {
    //         //     const command = splited[0]
    //         //     const argument = splited[1]

    //         //     if (command == "cd") handleNavigate(argument)
    //         // }

    //         terminal.setModal(false)
    //         terminal.setShell("")
    //     } else {
    //         termLogin()
    //     }
    // }

    return terminal
}
