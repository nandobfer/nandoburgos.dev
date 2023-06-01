import colors from "../../colors"
import { SxProps } from "@mui/material"

interface Styles {
    body: React.CSSProperties
    wrapper: React.CSSProperties
    sidebar: React.CSSProperties
    maincontainer: React.CSSProperties
    menu: SxProps
    sheet: SxProps
    title: React.CSSProperties
    skeleton: SxProps
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
        flex: 0.2,
        flexShrink: 0,
        flexDirection: "column",
        height: "100%",
        backgroundColor: colors.backgroundDark,
    },

    maincontainer: {
        flex: 0.8,
        flexShrink: 0,
        flexDirection: "column",
        height: "100%",
        outline: `1px solid ${colors.border}`,
        gap: "1vw",
        padding: "0.5vw",
    },

    menu: {
        color: colors.secondary,
        gap: "0.5vw",
        outline: `1px solid ${colors.border}`,
    },

    sheet: {
        display: "flex",
        flexDirection: "column",
        padding: "1vw",
    },

    title: {
        color: colors.primary,
    },

    skeleton: {
        width: "100%",
        height: "4.5vw",
    },
}
export default styles
