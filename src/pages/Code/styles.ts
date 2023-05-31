import colors from "../../colors"
import { SxProps } from "@mui/material"

interface Styles {
    body: React.CSSProperties
    wrapper: React.CSSProperties
    sidebar: React.CSSProperties
    maincontainer: React.CSSProperties
    menu: SxProps
}

const styles: Styles = {
    body: {
        backgroundColor: colors.background,
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
    },

    wrapper: {
        width: "100%",
        height: "100%",
    },

    sidebar: {
        flex: 0.25,
        flexShrink: 0,
        flexDirection: "column",
        height: "100%",
        backgroundColor: colors.backgroundDark,
    },

    maincontainer: {
        flex: 0.75,
        flexShrink: 0,
        flexDirection: "column",
        height: "100%",
        outline: `1px solid ${colors.border}`,
    },

    menu: {
        color: colors.secondary,
        gap: "0.5vw",
        outline: `1px solid ${colors.border}`,
    },
}
export default styles
