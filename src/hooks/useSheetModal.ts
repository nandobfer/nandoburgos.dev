import { useContext } from "react"
import SheetModalContext from "../contexts/sheetModalContext"
import { Sheet } from "../definitions/languages"
import { useState } from "react"

export const useSheetModal = () => {
    const sheetModalContext = useContext(SheetModalContext)
    const { open, setOpen, sheet, setSheet } = sheetModalContext

    const openSheetModal = (sheet?: Sheet) => {
        setSheet(sheet)
        setOpen(true)
    }

    return { open, setOpen, openSheetModal, sheet }
}
