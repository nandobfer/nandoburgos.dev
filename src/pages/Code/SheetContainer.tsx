import React, { useState } from "react"
import { Sheet } from "../../definitions/languages"
import { Paper, SxProps, Box, Button } from "@mui/material"
import styles from "./styles"
import colors from "../../colors"
import EditIcon from "@mui/icons-material/Edit"
import { useSheetModal } from "../../hooks/useSheetModal"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"

interface SheetContainerProps {
    sheet: Sheet
}

export const SheetContainer: React.FC<SheetContainerProps> = ({ sheet }) => {
    const [hovered, setHovered] = useState(false)
    const [clipboardFeedback, setClipboardFeedback] = useState(false)

    const { openSheetModal } = useSheetModal()

    const paper_style: SxProps = {
        ...styles.sheet,
        outline: hovered ? `1px solid ${colors.primary}` : "",
    }

    const copy = () => {
        setClipboardFeedback(true)
        setTimeout(() => setClipboardFeedback(false), 500)
        navigator.clipboard.writeText(sheet.code)
    }

    return (
        <Paper sx={paper_style} elevation={1} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Box sx={styles.box}>
                <p style={styles.title}>{sheet.title}</p>
                <p>{sheet.code}</p>
            </Box>
            <Button
                sx={{
                    ...styles.menuitem,
                    marginLeft: "auto",
                    backgroundColor: clipboardFeedback ? colors.primary : "",
                    "&:hover": { backgroundColor: clipboardFeedback ? colors.primary : "" },
                }}
                variant="outlined"
                color="secondary"
                onClick={() => copy()}
            >
                <ContentCopyIcon />
            </Button>
            <Button sx={styles.menuitem} variant="outlined" color="secondary" onClick={() => openSheetModal(sheet)}>
                <EditIcon />
            </Button>
        </Paper>
    )
}
