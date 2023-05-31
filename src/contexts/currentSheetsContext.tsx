import { createContext, useState } from "react"
import React from "react"
import { Sheet } from "../definitions/languages"

interface CurrentSheetsContextValue {
    value: Sheet[]
    setValue: (value: Sheet[]) => void
}

interface CurrentSheetsProviderProps {
    children: React.ReactNode
}

const CurrentSheetsContext = createContext<CurrentSheetsContextValue>({} as CurrentSheetsContextValue)

export default CurrentSheetsContext

export const CurrentSheetsProvider: React.FC<CurrentSheetsProviderProps> = ({ children }) => {
    const [value, setValue] = useState<Sheet[]>([])

    return <CurrentSheetsContext.Provider value={{ value, setValue }}>{children}</CurrentSheetsContext.Provider>
}
