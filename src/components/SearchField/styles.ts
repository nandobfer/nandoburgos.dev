import colors from "../../colors"
import { SxProps } from "@mui/material"

interface Styles {
    body: React.CSSProperties
    autocomplete: SxProps
    listbox: SxProps
}

const styles: Styles = {
    body: {
        width: "100%",
        backgroundColor: colors.backgroundDark,
        padding: "0.5vw",
    },
    autocomplete: {
        width: "100%",
    },
    listbox: {
        width: "100vw",
        color: colors.secondary,
    },
}

export default styles
