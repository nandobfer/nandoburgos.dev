import { useContext } from "react"
import LanguageContext from "../contexts/LanguageContext"

export const useLanguage = () => {
    const language = useContext(LanguageContext);

    return language;
}