import React, { useEffect, useState, useRef, useLayoutEffect } from "react"
import { Sheet } from "../../definitions/languages"
import { useSheetModal } from "../../hooks/useSheetModal"
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    MenuItem,
    TextField,
    CircularProgress,
} from "@mui/material"
import styles from "./styles"
import { Formik, Form } from "formik"
import { useLanguages } from "../../hooks/useLanguages"
import { useApi } from "../../hooks/useApi"
import { useSheets } from "../../hooks/useSheets"
import SendIcon from "@mui/icons-material/Send"
import SaveIcon from "@mui/icons-material/Save"
import { useRefresh } from "../../hooks/useRefresh"
import { useSnackbar } from "burgos-snackbar"
import { useTerminal } from "../../hooks/useTerminal"

interface TerminalProps {}

export const Terminal: React.FC<TerminalProps> = ({}) => {
    const terminal = useTerminal()
    const ref = useRef<HTMLInputElement>(null)

    const handleClose = () => {
        terminal.close()
    }

    useLayoutEffect(() => {
        if (terminal.modal) setTimeout(() => ref.current?.focus(), 100)
    }, [terminal.modal])

    return (
        <Dialog open={terminal.modal} onClose={handleClose} sx={styles.body} PaperProps={{ sx: styles.content }}>
            <TextField
                value={terminal.shell}
                onChange={(event) => terminal.setShell(event.target.value)}
                inputProps={{ ref: ref }}
                fullWidth
                placeholder={terminal.placeholder}
                type={terminal.inputType}
                sx={styles.textfield}
                InputProps={{ startAdornment: <p style={{ marginRight: "0.5vw" }}>{">"}</p> }}
                autoComplete="off"
            />
        </Dialog>
    )
}
