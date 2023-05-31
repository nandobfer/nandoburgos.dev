import colors from "../../colors"
import { SxProps } from "@mui/material"

interface Styles {
    body: React.CSSProperties
    menu: SxProps
}

const styles: Styles = {
    body: {
        width: "100vw",
        height: "4vw",
        backgroundColor: colors.backgroundDark,
        border: `1px solid ${colors.border}`,
    },
    menu: {
        color: colors.secondary,
        gap: "0.5vw",
        outline: `1px solid ${colors.border}`,
    },
}
export default styles
