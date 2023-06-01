import colors from "../../colors"
import { SxProps } from "@mui/material"

interface Styles {
    body: SxProps
    title: SxProps
    content: SxProps
    textfield: SxProps
}

const styles: Styles = {
    body: { display: "flex", height: "min-content", justifyContent: "center" },
    title: {
        color: colors.primary,
        backgroundColor: colors.backgroundDark,
        borderBottom: `1px solid ${colors.border}`,
    },
    content: {
        width: "95vw",
        maxWidth: "none",
    },
    textfield: {
        backgroundColor: colors.backgroundDark,
    },
}

export default styles
