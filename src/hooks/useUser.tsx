import { useSnackbar } from "burgos-snackbar"
import { useApi } from "./useApi"
import { useAuthentication } from "./useAuthentication"
import { useTerminal } from "./useTerminal"
import { useState, useEffect } from "react"
import { TextField, CircularProgress, FormGroup } from "@mui/material"
import colors from "../colors"

export const useUser = () => {
    const terminal = useTerminal()
    const api = useApi()
    const { authentication, setAuthentication } = useAuthentication()
    const { snackbar } = useSnackbar()

    const Input = ({ username }: { username: string }) => {
        const [loading, setLoading] = useState(false)
        const [password, setPassword] = useState("")

        const tryLogin = () => {
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
                    }
                },
                finallyCallback: () => setLoading(false),
            })
        }

        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            tryLogin()
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
            // terminal.setInputType("password")
            terminal.setShell("")
            terminal.setPlaceholder(`${placeholder} password`)
            terminal.stdout.setOpen(true)
            terminal.stdout.setContentTitle("")
            terminal.stdout.setContent([<Input username={user} />])
        } else {
            // stdout current user

            const user_string = authentication
                ? ` ${authentication.id} - ${authentication.username} / ${authentication.name}`
                : ""
            terminal.setPlaceholder(placeholder)
            terminal.setShell("")
            terminal.stdout.setOpen(true)
            const displayed_user = JSON.parse(JSON.stringify(authentication))
            delete displayed_user.password
            terminal.stdout.setContent([<pre>{JSON.stringify(displayed_user, null, 4)}</pre>])
        }
    }

    return user
}
