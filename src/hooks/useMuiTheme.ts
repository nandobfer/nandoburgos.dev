import { createTheme } from "@mui/material"
import colors from "../colors"

export const useMuiTheme = () => {
    const THEME = createTheme({
        typography: {
            fontFamily: ["Fira Code"].join(","),
            //  "fontSize": 14,
            //  "fontWeightLight": 300,
            //  "fontWeightRegular": 400,
            //  "fontWeightMedium": 500
        },
        palette: {
            mode: "dark",

            primary: {
                main: colors.primary,
            },
            secondary: {
                main: colors.secondary,
            },
            text: {
                primary: colors.text.primary,
                // secondary: colors.text.secondary,
                // disabled: colors.primary,
            },
            // success: {
            //     main: colors.green,
            // },
            // error: {
            //     main: colors.red,
            // }
        },
    })

    return THEME
}
