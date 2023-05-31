import React from "react"
import { Language } from "../../definitions/languages"

interface ContentProps {
    language: Language
}

export const Content: React.FC<ContentProps> = ({ language }) => {
    return <>{language.title}</>
}
