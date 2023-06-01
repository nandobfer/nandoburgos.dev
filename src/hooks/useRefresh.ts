import { Language, Sheet } from "../definitions/languages"
import { useApi } from "./useApi"
import { useCurrentLanguage } from "./useCurrentLanguage"
import { useCurrentSheets } from "./useCurrentSheets"
import { useLanguages } from "./useLanguages"
import { useSheets } from "./useSheets"

export const useRefresh = () => {
    const api = useApi()
    const { setCurrentSheets } = useCurrentSheets()
    const { setSheets } = useSheets()
    const { currentLanguage } = useCurrentLanguage()
    const { setLanguages } = useLanguages()

    const refresh = () => {
        setCurrentSheets([])
        api.sheets.get({
            callback: (response: { data: Sheet[] }) => {
                setSheets(response.data)
                setCurrentSheets(response.data.filter((sheet) => sheet.language.id == currentLanguage.id))
                // setLanguages(
                //     response.data
                //         .map((sheet) => sheet.language) // Extract language from each sheet
                //         .reduce((languages: Language[], language) => {
                //             if (!languages.some((obj) => obj.id === language.id)) {
                //                 languages.push(language)
                //             }
                //             return languages
                //         }, [])
                // )
            },
        })
    }

    return refresh
}
