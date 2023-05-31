import { Language } from "../definitions/languages"

export const useLanguages = () => {
    const languages: Language[] = [
        {
            id: 1,
            title: "python",
            color: "",
        },
        {
            id: 2,
            title: "javascript",
            color: "",
        },
        {
            id: 3,
            title: "git",
            color: "",
        },
        {
            id: 4,
            title: "powershell",
            color: "",
        },
        {
            id: 5,
            title: "bash",
            color: "",
        },
    ]

    return languages
}
