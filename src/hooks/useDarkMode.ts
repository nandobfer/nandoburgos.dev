import { useContext } from "react"
import DarkModeContext from "../contexts/darkModeContext"

export const useDarkMode = () => {
    const darkModeContext = useContext(DarkModeContext)
    const darkMode = darkModeContext.value

    const setDarkMode = darkModeContext.setValue
    const toogleDarkMode = darkModeContext.toogleDarkMode

    return { darkMode, setDarkMode, toogleDarkMode }
}
