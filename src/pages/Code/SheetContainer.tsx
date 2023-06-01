import React, { useState } from "react"
import { Sheet } from "../../definitions/languages"
import { Paper, SxProps, Box, Button } from "@mui/material"
import styles from "./styles"
import colors from "../../colors"
import EditIcon from "@mui/icons-material/Edit"
import { useSheetModal } from "../../hooks/useSheetModal"

interface SheetContainerProps {
    sheet: Sheet
}

export const SheetContainer: React.FC<SheetContainerProps> = ({ sheet }) => {
    const [hovered, setHovered] = useState(false)

    const { openSheetModal } = useSheetModal()

    const paper_style: SxProps = {
        ...styles.sheet,
        outline: hovered ? `1px solid ${colors.primary}` : "",
    }

    return (
        <Paper sx={paper_style} elevation={1} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Box sx={styles.box}>
                <p style={styles.title}>{sheet.title}</p>
                <p>{sheet.code}</p>
            </Box>
            <Button sx={styles.menuitem} variant="outlined" color="secondary" onClick={() => openSheetModal(sheet)}>
                <EditIcon />
            </Button>
        </Paper>
    )
}
