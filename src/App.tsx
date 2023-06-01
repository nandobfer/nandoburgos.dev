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
import { SheetModalProvider } from "./contexts/sheetModalContext"
import { SheetModal } from "./components/SheetModal"

const App = () => {
    const muiTheme = useMuiTheme()
    return (
        <ThemeProvider theme={muiTheme}>
            <SnackbarProvider>
                <LanguagesProvider>
                    <SheetsProvider>
                        <CurrentSheetsProvider>
                            <CurrentLanguageProvider>
                                <SheetModalProvider>
                                    <BrowserRouter>
                                        <Snackbar />
                                        <SheetModal />
                                        <Header />
                                        <Routes>
                                            <Route index element={<Home />} />
                                            <Route path="/code" element={<Code />} />
                                        </Routes>
                                    </BrowserRouter>
                                </SheetModalProvider>
                            </CurrentLanguageProvider>
                        </CurrentSheetsProvider>
                    </SheetsProvider>
                </LanguagesProvider>
            </SnackbarProvider>
        </ThemeProvider>
    )
}

export default App
