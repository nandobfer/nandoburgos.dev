import { createContext, useState } from "react"
import React from "react"
import { Language } from "../definitions/languages"
import { useLanguages } from "../hooks/useLanguages"

interface CurrentLanguageContextValue {
    value: Language
    setValue: (value: Language) => void
}

interface CurrentLanguageProviderProps {
    children: React.ReactNode
}

const CurrentLanguageContext = createContext<CurrentLanguageContextValue>({} as CurrentLanguageContextValue)

export default CurrentLanguageContext

export const CurrentLanguageProvider: React.FC<CurrentLanguageProviderProps> = ({ children }) => {
    const languages = useLanguages()
    const [value, setValue] = useState<Language>(languages[0])

    return <CurrentLanguageContext.Provider value={{ value, setValue }}>{children}</CurrentLanguageContext.Provider>
}
