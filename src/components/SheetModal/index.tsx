import React, { useEffect, useRef, useState } from "react"
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
import { useAuthentication } from "../../hooks/useAuthentication"

interface SheetModalProps {}

interface FormValues {
    code: string
    keywords: string
    language: number
    title: string
}

export const SheetModal: React.FC<SheetModalProps> = ({}) => {
    const { open, setOpen, sheet } = useSheetModal()
    const { languages } = useLanguages()
    const { snackbar } = useSnackbar()
    const { authentication } = useAuthentication()
    const refresh = useRefresh()
    const api = useApi()
    const titleRef = useRef<HTMLInputElement>(null)

    const [loading, setLoading] = useState(false)

    const initialValues: FormValues = sheet
        ? { ...sheet, language: sheet?.language.id }
        : {
              code: "",
              keywords: "",
              language: 0,
              title: "",
          }

    const handleClose = () => {
        setLoading(false)
        setOpen(false)
    }

    const handleSubmit = (values: FormValues) => {
        if (!authentication) return
        if (loading) return
        if (Object.entries(values).filter((obj) => !obj[1]).length) return

        setLoading(true)

        if (sheet) {
            api.sheets.update({
                data: values,
                callback: (response: { data: Sheet }) => {
                    refresh()
                    snackbar({ severity: "success", text: "sheet updated" })
                },
                finallyCallback: () => handleClose(),
            })
        } else {
            api.sheets.add({
                data: values,
                callback: (response: { data: Sheet }) => {
                    refresh()
                    snackbar({ severity: "success", text: "new sheet added" })
                },
                finallyCallback: () => handleClose(),
            })
        }
    }

    useEffect(() => {
        if (open) setTimeout(() => titleRef.current?.focus(), 100)
    }, [open])

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={styles.body}
        >
            <DialogTitle sx={styles.title}>{sheet ? "edit sheet" : "new sheet"}</DialogTitle>
            <DialogContent sx={styles.content}>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ values, handleChange }) => (
                        <Form style={styles.form}>
                            <TextField
                                label="title"
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                inputRef={titleRef}
                            />
                            <TextField
                                label="code"
                                multiline
                                minRows={5}
                                name="code"
                                value={values.code}
                                onChange={handleChange}
                                placeholder="multiline code"
                            />
                            <TextField
                                select
                                label="language"
                                name={"language"}
                                placeholder={"framework"}
                                onChange={handleChange}
                                value={values.language}
                                className="small-input"
                            >
                                <MenuItem value={0} style={{ display: "none" }} disabled></MenuItem>
                                {languages.map((language) => (
                                    <MenuItem key={language.id} value={language.id} style={{ width: "100%" }}>
                                        {language.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                label="keywords"
                                name="keywords"
                                value={values.keywords}
                                onChange={handleChange}
                                placeholder="word, word, word"
                            />
                            <Button type="submit" variant="contained" sx={{ gap: "0.5vw" }} disabled={!authentication}>
                                {loading ? (
                                    <CircularProgress size={"1.5rem"} color="secondary" />
                                ) : (
                                    <>
                                        <SaveIcon />
                                        save
                                    </>
                                )}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </DialogContent>
        </Dialog>
    )
}
