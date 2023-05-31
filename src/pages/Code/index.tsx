import React, { useState } from "react"
import styles from "./styles"
import { SearchField } from "../../components/SearchField"
import { useLanguages } from "../../hooks/useLanguages"
import { MenuItem, SxProps } from "@mui/material"
import colors from "../../colors"

interface CodeProps {}

export const Code: React.FC<CodeProps> = ({}) => {
    const languages = useLanguages()

    const [current, setCurrent] = useState(false)

    const menuStyle: SxProps = {
        ...styles.menu, 
        backgroundColor: current ? colors.primary : "",
        "&:hover": {
            backgroundColor: current ? colors.primaryHover : "",
        },
    }

    return (
        <div className="Code-Page" style={styles.body}>
            <SearchField />
            <div style={styles.wrapper}>
                <div style={styles.sidebar}>
                    {languages.map((language) => (
                        <MenuItem sx={menuStyle} key={language.id}>
                            {language.title}
                        </MenuItem>
                    ))}
                </div>
                <div style={styles.maincontainer}></div>
            </div>
        </div>
    )
}
