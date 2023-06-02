import React, { useState, useEffect, RefObject } from "react"
import { Autocomplete, TextField, MenuItem, SxProps } from "@mui/material"
import { Language, Sheet } from "../../definitions/languages"
import styles from "./styles"
import { useLanguages } from "../../hooks/useLanguages"
import { useCurrentLanguage } from "../../hooks/useCurrentLanguage"
import { useSheets } from "../../hooks/useSheets"
import { useCurrentSheets } from "../../hooks/useCurrentSheets"
import colors from "../../colors"
import AddBoxIcon from "@mui/icons-material/AddBox"
import { useSheetModal } from "../../hooks/useSheetModal"

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
    const { currentLanguage, setCurrentLanguage } = useCurrentLanguage()
    const { setCurrentSheets } = useCurrentSheets()
    const { openSheetModal } = useSheetModal()

    const [value, setValue] = useState("")

    useEffect(() => {
        setCurrentSheets(
            sheets.filter(
                (sheet) =>
                    sheet.language.id == currentLanguage.id &&
                    (sheet.title.includes(value) || sheet.keywords.includes(value) || sheet.code.includes(value))
            )
        )
    }, [value])

    return (
        <div className="SearchField-Component" style={styles.body}>
            <TextField
                value={value}
                onChange={(event) => setValue(event.target.value)}
                label="search"
                placeholder="code or keyword"
                inputProps={{ ref: innerRef }}
                autoComplete="new-password"
            />
            <MenuItem sx={styles.addButton} onClick={() => openSheetModal()}>
                {" "}
                <AddBoxIcon /> add
            </MenuItem>
        </div>
    )
}
