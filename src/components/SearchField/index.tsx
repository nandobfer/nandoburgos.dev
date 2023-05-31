import React, { useState, useEffect } from "react"
import { Autocomplete, TextField, MenuItem } from "@mui/material"
import { Language, Sheet } from "../../definitions/languages"
import styles from "./styles"
import { useLanguages } from "../../hooks/useLanguages"
import { useCurrentLanguage } from "../../hooks/useCurrentLanguage"
import { useSheets } from "../../hooks/useSheets"
import { useCurrentSheets } from "../../hooks/useCurrentSheets"

interface SearchFieldProps {
    values?: { search: string }
    handleChange?: React.ChangeEventHandler
}

const instanceOfLanguage = (object: any): object is Language => {
    return true
}
const instanceOfSheet = (object: any): object is Sheet => {
    return true
}

export const SearchField: React.FC<SearchFieldProps> = ({ values, handleChange }) => {
    const { languages } = useLanguages()
    const { sheets } = useSheets()
    const { setCurrentLanguage } = useCurrentLanguage()
    const { setCurrentSheets } = useCurrentSheets()

    const [options, setOptions] = useState<(Language | Sheet)[]>([])
    const [inputValue, setInputValue] = useState("")
    const [value, setValue] = useState<Language | Sheet | null>(null)

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
    }, [inputValue, value])

    return (
        <div className="SearchField-Component" style={styles.body}>
            <Autocomplete
                getOptionLabel={(option) => option.title}
                fullWidth
                filterOptions={(x) => x}
                isOptionEqualToValue={(option, value) => option.id == value.id}
                options={options}
                ListboxProps={{ sx: styles.listbox }}
                autoComplete
                includeInputInList
                filterSelectedOptions
                value={value}
                noOptionsText="no results"
                onChange={(event: any, newValue: Language | Sheet | null) => {
                    console.log(newValue)
                    setValue(newValue)

                    if (newValue && instanceOfLanguage(newValue)) setCurrentLanguage(newValue)
                    if (newValue && instanceOfSheet(newValue)) setCurrentSheets([newValue])
                }}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue)
                }}
                renderInput={(params) => <TextField {...params} label="search" fullWidth />}
            />
        </div>
    )
}
