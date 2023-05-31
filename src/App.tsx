import "./sass/_all.scss"
import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import { Snackbar, SnackbarProvider } from "burgos-snackbar"
import { Home } from "./pages/Home"
import { useMuiTheme } from "./hooks/useMuiTheme"
import { ThemeProvider } from "@mui/material"
import { Code } from "./pages/Code"
import { Header } from "./components/Header"
import { CurrentLanguageProvider } from "./contexts/currentLanguageContext"
import { LanguagesProvider } from "./contexts/languagesContext"
import { SheetsProvider } from "./contexts/sheetsContext"
import { CurrentSheetsProvider } from "./contexts/currentSheetsContext"

const App = () => {
    const muiTheme = useMuiTheme()
    return (
        <ThemeProvider theme={muiTheme}>
            <SnackbarProvider>
                <LanguagesProvider>
                    <SheetsProvider>
                        <CurrentSheetsProvider>
                            <CurrentLanguageProvider>
                                <BrowserRouter>
                                    <Snackbar />
                                    <Header />
                                    <Routes>
                                        <Route index element={<Home />} />
                                        <Route path="/code" element={<Code />} />
                                    </Routes>
                                </BrowserRouter>
                            </CurrentLanguageProvider>
                        </CurrentSheetsProvider>
                    </SheetsProvider>
                </LanguagesProvider>
            </SnackbarProvider>
        </ThemeProvider>
    )
}

export default App