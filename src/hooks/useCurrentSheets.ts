import { useContext } from "react"
import CurrentSheetsContext from "../contexts/currentSheetsContext"

export const useCurrentSheets = () => {
    const currentSheetsContext = useContext(CurrentSheetsContext)
    const currentSheets = currentSheetsContext.value
    const setCurrentSheets = currentSheetsContext.setValue

    return { currentSheets, setCurrentSheets }
}
