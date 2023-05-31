import { useContext } from "react"
import LanguagesContext from "../contexts/languagesContext"

export const useLanguages = () => {
    const languagesContext = useContext(LanguagesContext)
    const languages = languagesContext.value
    const setLanguages = languagesContext.setValue

    return { languages, setLanguages }
}
