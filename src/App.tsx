import "./sass/_all.scss"
import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import { Snackbar } from "burgos-snackbar"
import { Home } from "./pages/Home"
import { useMuiTheme } from "./hooks/useMuiTheme"
import { ThemeProvider } from "@mui/material"

const App = () => {
    const muiTheme = useMuiTheme()
    return (
        <ThemeProvider theme={muiTheme}>
            <BrowserRouter>
                <Snackbar />
                <Routes>
                    <Route index element={<Home />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
