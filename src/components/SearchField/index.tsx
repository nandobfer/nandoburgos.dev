import React, { useState, useEffect, RefObject } from "react"
import { Autocomplete, TextField, MenuItem } from "@mui/material"
import { Language, Sheet } from "../../definitions/languages"
import styles from "./styles"
import { useLanguages } from "../../hooks/useLanguages"
import { useCurrentLanguage } from "../../hooks/useCurrentLanguage"
import { useSheets } from "../../hooks/useSheets"
import { useCurrentSheets } from "../../hooks/useCurrentSheets"

interface SearchFieldProps {
    innerRef?: RefObject<HTMLInputElement>
}

const instanceOfLanguage = (object: any): object is Language => {
    return true
}
const instanceOfSheet = (object: any): object is Sheet => {
    return true
}

export const SearchField: React.FC<SearchFieldProps> = ({ innerRef }) => {
    const { languages } = useLanguages()
    const { sheets } = useSheets()
    const { setCurrentLanguage } = useCurrentLanguage()
    const { setCurrentSheets } = useCurrentSheets()

    const [options, setOptions] = useState<(Language | Sheet)[]>([])
    const [inputValue, setInputValue] = useState("")
    const [value, setValue] = useState("")

    useEffect(() => {
        setOptions([
            ...languages.filter((language) => language.title.includes(inputValue)),
            ...sheets.filter(
                (sheet) =>
                    sheet.title.includes(inputValue) ||
                    sheet.keywords.includes(inputValue) ||
                    sheet.code.includes(inputValue)
            ),
        ])
        setCurrentSheets(
            sheets.filter(
                (sheet) => sheet.title.includes(value) || sheet.keywords.includes(value) || sheet.code.includes(value)
            )
        )
    }, [inputValue, value])

    return (
        <div className="SearchField-Component" style={styles.body}>
            <TextField
                value={value}
                onChange={(event) => setValue(event.target.value)}
                label="search"
                placeholder="code or keyword"
                inputProps={{ ref: innerRef }}
            />
        </div>
    )
}
