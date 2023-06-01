import colors from "../../colors"
import { SxProps } from "@mui/material"

interface Styles {
    body: SxProps
    title: SxProps
    content: SxProps
    form: React.CSSProperties
}

const styles: Styles = {
    body: { display: "flex", alignItems: "center", justifyContent: "center" },
    title: {
        color: colors.primary,
        backgroundColor: colors.backgroundDark,
        borderBottom: `1px solid ${colors.border}`,
    },
    content: {
        padding: "1vw!important",
        width: "40vw",
        backgroundColor: colors.background,
    },
    form: {
        flexDirection: "column",
        gap: "1vw",
    },
}

export default styles
