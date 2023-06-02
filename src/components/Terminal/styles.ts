import colors from "../../colors"
import { SxProps } from "@mui/material"

interface Styles {
    body: SxProps
    title: SxProps
    content: SxProps
    textfield: SxProps
    stdout: SxProps
}

const styles: Styles = {
    body: { display: "flex", flexDirection: "column", height: "min-content", justifyContent: "center" },
    title: {
        color: colors.primary,
        backgroundColor: colors.backgroundDark,
        borderBottom: `1px solid ${colors.border}`,
    },
    content: {
        width: "95vw",
        maxWidth: "none",
        gap: "0.5vw",
        background: "none",
    },
    textfield: {
        backgroundColor: colors.backgroundDark,
    },
    stdout: {
        width: "100%",
        maxHeight: "20vw",
        overflowY: "auto",
        border: `1px solid ${colors.border}`,
        flexDirection: "column",
        gap: "0.5vw",
        padding: "1vw",
    },
}

export default styles
