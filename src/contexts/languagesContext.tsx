import { createContext, useEffect, useState } from "react"
import React from "react"
import { Language, Sheet } from "../definitions/languages"
import { useApi } from "../hooks/useApi"

interface LanguagesContextValue {
    value: Language[]
    setValue: (value: Language[]) => void
}

interface LanguagesProviderProps {
    children: React.ReactNode
}

const LanguagesContext = createContext<LanguagesContextValue>({} as LanguagesContextValue)

export default LanguagesContext

export const LanguagesProvider: React.FC<LanguagesProviderProps> = ({ children }) => {
    const api = useApi()
    const [value, setValue] = useState<Language[]>([
        {
            id: 1,
            name: "python",
            color: "",
            sheets: [],
        },
        {
            id: 2,
            name: "javascript",
            color: "",
            sheets: [],
        },
        {
            id: 3,
            name: "git",
            color: "",
            sheets: [],
        },
        {
            id: 4,
            name: "powershell",
            color: "",
            sheets: [],
        },
        {
            id: 5,
            name: "bash",
            color: "",
            sheets: [],
        },
        {
            id: 6,
            name: "react",
            color: "",
            sheets: [],
        },
        {
            id: 7,
            name: "node",
            color: "",
            sheets: [],
        },
        {
            id: 8,
            name: "vim",
            color: "",
            sheets: [],
        },
    ])

    useEffect(() => {
        api.sheets.get({
            callback: (response: { data: Sheet[] }) =>
                setValue(
                    value.map((language) => ({
                        ...language,
                        sheets: response.data.filter((sheet) => sheet.language.id == language.id),
                    }))
                ),
        })
    }, [])

    return <LanguagesContext.Provider value={{ value, setValue }}>{children}</LanguagesContext.Provider>
}
