import { createContext, useState } from "react"
import React from "react"
import { Sheet } from "../definitions/languages"

interface SheetModalContextValue {
    open: boolean
    setOpen: (open: boolean) => void
    sheet?: Sheet
    setSheet: (sheet?: Sheet) => void
}

interface SheetModalProviderProps {
    children: React.ReactNode
}

const SheetModalContext = createContext<SheetModalContextValue>({} as SheetModalContextValue)

export default SheetModalContext

export const SheetModalProvider: React.FC<SheetModalProviderProps> = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [sheet, setSheet] = useState<Sheet>()

    return <SheetModalContext.Provider value={{ open, setOpen, sheet, setSheet }}>{children}</SheetModalContext.Provider>
}
