import { useContext } from "react"
import SheetsContext from "../contexts/sheetsContext"

export const useSheets = () => {
    const sheetsContext = useContext(SheetsContext)
    const sheets = sheetsContext.value
    const setSheets = sheetsContext.setValue

    return { sheets, setSheets }
}
