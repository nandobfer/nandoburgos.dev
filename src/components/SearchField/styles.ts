import colors from "../../colors"
import { SxProps } from "@mui/material"

interface Styles {
    body: React.CSSProperties
    autocomplete: SxProps
    listbox: SxProps
    addButton: SxProps
}

const styles: Styles = {
    body: {
        width: "100%",
        backgroundColor: colors.backgroundDark,
        padding: "0.5vw",
        gap: "0.5vw",
        // outline: `1px solid ${colors.border}`,
    },

    autocomplete: {
        width: "100%",
    },

    listbox: {
        width: "100vw",
        color: colors.secondary,
    },

    addButton: {
        backgroundColor: colors.primary,
        color: colors.secondary,
        borderRadius: "0.2vw",
        gap: "0.5vw",

        "&:hover": {
            backgroundColor: colors.primaryHover,
        },
    },
}

export default styles
