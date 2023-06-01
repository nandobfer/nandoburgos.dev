import { useContext } from "react"
import SheetsContext from "../contexts/sheetsContext"
import { useApi } from "./useApi"
import { Sheet } from "../definitions/languages"
import { useCurrentSheets } from "./useCurrentSheets"

export const useSheets = () => {
    const sheetsContext = useContext(SheetsContext)
    const sheets = sheetsContext.value
    const setSheets = sheetsContext.setValue
    const api = useApi()
    const { setCurrentSheets } = useCurrentSheets()

    const refresh = () => {
        setCurrentSheets([])
        api.sheets.get({
            callback: (response: { data: Sheet[] }) => {
                setSheets(response.data)
                setCurrentSheets(response.data)
            },
        })
    }

    return { sheets, setSheets, refresh }
}
