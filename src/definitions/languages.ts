export interface Language {
    id: number
    title: string
    color: string
    sheets?: Sheet[]
}

export interface Sheet {
    id: number
    title: string
    code: string
    keywords: string
    language: Language
}
