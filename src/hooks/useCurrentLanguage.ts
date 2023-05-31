import { useContext } from "react"
import CurrentLanguageContext from "../contexts/currentLanguageContext"

export const useCurrentLanguage = () => {
    const currentLanguageContext = useContext(CurrentLanguageContext)
    const currentLanguage = currentLanguageContext.value
    const setCurrentLanguage = currentLanguageContext.setValue

    return { currentLanguage, setCurrentLanguage }
}
