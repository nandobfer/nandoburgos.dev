import { createContext, useState } from "react"
import React, { useEffect } from "react"
import { Sheet } from "../definitions/languages"
import { useApi } from "../hooks/useApi"

interface SheetsContextValue {
    value: Sheet[]
    setValue: (value: Sheet[]) => void
}

interface SheetsProviderProps {
    children: React.ReactNode
}

const SheetsContext = createContext<SheetsContextValue>({} as SheetsContextValue)

export default SheetsContext

export const SheetsProvider: React.FC<SheetsProviderProps> = ({ children }) => {
    const api = useApi()
    const [value, setValue] = useState<Sheet[]>([])

    useEffect(() => {
        api.sheets.get({ callback: (response: { data: Sheet[] }) => setValue(response.data) })
    }, [])

    return <SheetsContext.Provider value={{ value, setValue }}>{children}</SheetsContext.Provider>
}
