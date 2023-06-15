import { useSnackbar } from "burgos-snackbar"
import { useApi } from "./useApi"
import { useAuthentication } from "./useAuthentication"
import { useTerminal } from "./useTerminal"
import { useState, useRef } from "react"
import { TextField, CircularProgress, FormGroup } from "@mui/material"
import colors from "../colors"

export const useUser = () => {
    const terminal = useTerminal()
    const api = useApi()
    const [username, setUsername] = useState("")
    const { authentication, setAuthentication } = useAuthentication()
    const { snackbar } = useSnackbar()

    const Input = () => {
        const [loading, setLoading] = useState(false)
        const [password, setPassword] = useState("")

        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            if (loading) return
            if (!password) return

            setLoading(true)

            api.user.login({
                data: { user: username, password },
                callback: (response: { data: User }) => {
                    const user = response.data
                    if (user) {
                        setAuthentication(user)
                        console.log(user)
                        snackbar({ severity: "success", text: "login successful" })
                        terminal.close()
                    } else {
                        snackbar({ severity: "error", text: "login failed" })
                        terminal.setPlaceholder("login failed, try again")
                        terminal.setShell("")
                        terminal.setInputType("text")
                    }
                },
                finallyCallback: () => setLoading(false),
            })
        }

        return (
            <form onSubmit={handleSubmit}>
                <TextField
                    autoFocus
                    autoComplete="off"
                    variant="standard"
                    type="password"
                    placeholder={username}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    InputProps={{
                        endAdornment: loading ? <CircularProgress size={"1.5rem"} sx={{ color: colors.primary }} /> : <></>,
                    }}
                    inputProps={{ ref: terminal.stdoutInputRef }}
                />
            </form>
        )
    }

    const user = (command: string) => {
        const [placeholder, user] = command.split(" ")
        if (user) {
            setUsername(user)
            // terminal.setInputType("password")
            terminal.setShell("")
            terminal.setPlaceholder(`${placeholder} password`)
            terminal.stdout.setOpen(true)
            setTimeout(() => terminal.stdout.setContent([<Input />]), 500)
        } else {
            // stdout current user

            const user_string = authentication
                ? ` ${authentication.id} - ${authentication.username} / ${authentication.name}`
                : ""
            terminal.setPlaceholder(user_string)
            terminal.setShell("")
        }
    }

    return user
}