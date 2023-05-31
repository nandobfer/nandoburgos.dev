import { useLanguages } from "./useLanguages"

export const useApi = () => {
    const languages = useLanguages()

    const methods = {
        languages: {
            list: (callback: Function) => callback(languages),
        },
    }

    return methods
}
