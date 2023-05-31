import React, { useState } from "react"
import styles from "./styles"
import { SearchField } from "../../components/SearchField"
import { useLanguages } from "../../hooks/useLanguages"
import { MenuItem, SxProps } from "@mui/material"
import colors from "../../colors"
import { Language } from "../../definitions/languages"
import { useCurrentLanguage } from "../../hooks/useCurrentLanguage"
import { Content } from "./Content"

interface CodeProps {}

export const Code: React.FC<CodeProps> = ({}) => {
    const languages = useLanguages()
    const { currentLanguage, setCurrentLanguage } = useCurrentLanguage()

    return (
        <div className="Code-Page" style={styles.body}>
            <SearchField />
            <div style={styles.wrapper}>
                <div style={styles.sidebar}>
                    {languages.map((language) => {
                        const menuStyle: SxProps = {
                            ...styles.menu,
                            backgroundColor: currentLanguage?.id == language.id ? colors.primary : "",
                            "&:hover": {
                                backgroundColor: currentLanguage?.id == language.id ? colors.primaryHover : "",
                            },
                        }

                        return (
                            <MenuItem sx={menuStyle} key={language.id} onClick={() => setCurrentLanguage(language)}>
                                {language.title}
                            </MenuItem>
                        )
                    })}
                </div>
                <div style={styles.maincontainer}>
                    <Content language={currentLanguage} />
                </div>
            </div>
        </div>
    )
}
