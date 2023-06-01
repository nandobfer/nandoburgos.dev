import React, { useEffect, useState } from "react"
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

interface SheetModalProps {}

interface FormValues {
    code: string
    keywords: string
    language: number
    title: string
}

export const SheetModal: React.FC<SheetModalProps> = ({}) => {
    const { open, setOpen, sheet } = useSheetModal()
    const refresh = useRefresh()
    const { languages } = useLanguages()
    const api = useApi()

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
        setLoading(true)

        if (sheet) {
            api.sheets.update({
                data: values,
                callback: (response: { data: Sheet }) => {
                    refresh()
                },
                finallyCallback: () => handleClose(),
            })
        } else {
            api.sheets.add({
                data: values,
                callback: (response: { data: Sheet }) => {
                    refresh()
                },
                finallyCallback: () => handleClose(),
            })
        }
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={styles.body}
        >
            <DialogTitle sx={styles.title}>{"edit sheet" || "new sheet"}</DialogTitle>
            <DialogContent sx={styles.content}>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ values, handleChange }) => (
                        <Form style={styles.form}>
                            <TextField label="title" name="title" value={values.title} onChange={handleChange} />
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
                            <Button type="submit" variant="contained" sx={{ gap: "0.5vw" }}>
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
