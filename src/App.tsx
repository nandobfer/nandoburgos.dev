import "./sass/_all.scss"
import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import { Snackbar } from "burgos-snackbar"
import { Home } from "./pages/Home"
import { useMuiTheme } from "./hooks/useMuiTheme"
import { ThemeProvider } from "@mui/material"
import { Code } from "./pages/Code"
import { Header } from "./components/Header"

const App = () => {
    const muiTheme = useMuiTheme()
    return (
        <ThemeProvider theme={muiTheme}>
            <BrowserRouter>
                <Snackbar />
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/code" element={<Code />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
