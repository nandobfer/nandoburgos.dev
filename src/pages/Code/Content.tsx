import React from "react"
import { Language, Sheet } from "../../definitions/languages"
import { Paper } from "@mui/material"
import styles from "./styles"
import { useCurrentSheets } from "../../hooks/useCurrentSheets"

interface ContentProps {}

export const Content: React.FC<ContentProps> = ({}) => {
    const { currentSheets } = useCurrentSheets()

    return (
        <>
            {currentSheets?.map((sheet) => (
                <Paper key={sheet.id} sx={styles.sheet}>
                    <p style={styles.title}>{sheet.title}</p>
                    <p>{sheet.code}</p>
                </Paper>
            ))}
        </>
    )
}
