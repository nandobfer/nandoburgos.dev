import { createContext, useEffect, useState } from "react"
import React from "react"
import { Language } from "../definitions/languages"
import { useLanguages } from "../hooks/useLanguages"
import { useCurrentSheets } from "../hooks/useCurrentSheets"

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
    const { languages } = useLanguages()
    const { setCurrentSheets } = useCurrentSheets()
    const [value, setValue] = useState<Language>(languages[0])

    useEffect(() => {
        if (value.sheets) setCurrentSheets(value.sheets)
    }, [value])

    return <CurrentLanguageContext.Provider value={{ value, setValue }}>{children}</CurrentLanguageContext.Provider>
}
