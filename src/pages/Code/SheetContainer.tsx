import React, { useState } from "react"
import { Sheet } from "../../definitions/languages"
import { Paper, SxProps } from "@mui/material"
import styles from "./styles"
import colors from "../../colors"

interface SheetContainerProps {
    sheet: Sheet
}

export const SheetContainer: React.FC<SheetContainerProps> = ({ sheet }) => {
    const [hovered, setHovered] = useState(false)

    const paper_style: SxProps = {
        ...styles.sheet,
        outline: hovered ? `1px solid ${colors.primary}` : "",
    }

    return (
        <Paper sx={paper_style} elevation={1} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <p style={styles.title}>{sheet.title}</p>
            <p>{sheet.code}</p>
        </Paper>
    )
}
