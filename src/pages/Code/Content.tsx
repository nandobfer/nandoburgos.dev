import React from "react"
import { Language } from "../../definitions/languages"
import { Paper } from "@mui/material"
import styles from "./styles"

interface ContentProps {
    language: Language
}

export const Content: React.FC<ContentProps> = ({ language }) => {
    return (
        <>
            {language.sheets?.map((sheet) => (
                <Paper key={sheet.id} sx={styles.sheet}>
                    <p style={styles.title}>{sheet.title}</p>
                    <p>{sheet.code}</p>
                </Paper>
            ))}
        </>
    )
}
