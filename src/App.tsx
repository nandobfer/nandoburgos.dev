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
import { AuthenticationProvider } from "./contexts/authenticationContext"
import { TerminalProvider } from "./contexts/terminalContext"
import { Terminal } from "./components/Terminal"
import { DarkModeProvider } from "./contexts/darkModeContext"

const Themed = () => {
    const muiTheme = useMuiTheme()
    return (
        <ThemeProvider theme={muiTheme}>
            <SnackbarProvider>
                <LanguagesProvider>
                    <SheetsProvider>
                        <CurrentSheetsProvider>
                            <CurrentLanguageProvider>
                                <AuthenticationProvider>
                                    <SheetModalProvider>
                                        <TerminalProvider>
                                            <BrowserRouter>
                                                <Snackbar />
                                                <Terminal />
                                                <SheetModal />
                                                <Header />
                                                <Routes>
                                                    <Route index element={<Home />} />
                                                    <Route path="*" element={<Home />} />
                                                    <Route path="/code" element={<Code />} />
                                                    <Route path="/code/:language" element={<Code />} />
                                                </Routes>
                                            </BrowserRouter>
                                        </TerminalProvider>
                                    </SheetModalProvider>
                                </AuthenticationProvider>
                            </CurrentLanguageProvider>
                        </CurrentSheetsProvider>
                    </SheetsProvider>
                </LanguagesProvider>
            </SnackbarProvider>
        </ThemeProvider>
    )
}

const App = () => {
    return (
        <DarkModeProvider>
            <Themed />
        </DarkModeProvider>
    )
}

export default App
