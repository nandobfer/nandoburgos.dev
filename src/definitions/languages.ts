export interface Language {
    id: number
    name: string
    color: string
    sheets?: Sheet[]
}

export interface Sheet {
    id: number
    title: string
    code: string
    keywords: string
    language: Language
    user: User
}
