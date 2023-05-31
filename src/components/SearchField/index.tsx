import React, { useState, useEffect } from "react"
import { Autocomplete, TextField, MenuItem } from "@mui/material"
import { Language } from "../../definitions/languages"
import styles from "./styles"
import { useLanguages } from "../../hooks/useLanguages"

interface SearchFieldProps {
    values?: { search: string }
    handleChange?: React.ChangeEventHandler
}

export const SearchField: React.FC<SearchFieldProps> = ({ values, handleChange }) => {
    const languages = useLanguages()

    const [options, setOptions] = useState<Language[]>([])
    const [inputValue, setInputValue] = useState("")
    const [value, setValue] = useState<Language | null>(null)

    useEffect(() => {
        setOptions(languages.filter((language) => language.title.includes(inputValue)))
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
                onChange={(event: any, newValue: Language | null) => {
                    console.log(newValue)
                    setValue(newValue)
                }}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue)
                }}
                renderInput={(params) => <TextField {...params} label="search" fullWidth />}
            />
        </div>
    )
}
