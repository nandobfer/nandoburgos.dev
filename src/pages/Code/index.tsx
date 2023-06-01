import React, { useEffect, useRef, useState, useCallback } from "react"
import styles from "./styles"
import { SearchField } from "../../components/SearchField"
import { useLanguages } from "../../hooks/useLanguages"
import { MenuItem, SxProps } from "@mui/material"
import colors from "../../colors"
import { Language } from "../../definitions/languages"
import { useCurrentLanguage } from "../../hooks/useCurrentLanguage"
import { Content } from "./Content"
import { useCurrentSheets } from "../../hooks/useCurrentSheets"
import { useSheets } from "../../hooks/useSheets"
import { useSheetModal } from "../../hooks/useSheetModal"
import { useTerminal } from "../../hooks/useTerminal"

interface CodeProps {}

export const Code: React.FC<CodeProps> = ({}) => {
    const { languages } = useLanguages()
    const { currentLanguage, setCurrentLanguage } = useCurrentLanguage()
    const { sheets } = useSheets()
    const { currentSheets, setCurrentSheets } = useCurrentSheets()
    const { openSheetModal } = useSheetModal()
    const terminal = useTerminal()
    const searchFieldRef = terminal.searchFieldRef

    const navigateLanguage = (delta: number) => {
        if (currentLanguage.id + delta > languages.length) return
        if (currentLanguage.id + delta <= 0) return

        setCurrentLanguage(languages.filter((language) => language.id == currentLanguage.id + delta)[0])
        setCurrentSheets(sheets.filter((sheet) => sheet.language.id == currentLanguage.id + delta))
    }

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (!terminal.modal) {
                if (event.ctrlKey && event.key === "'") {
                    openSheetModal()
                } else if (event.key === "'") {
                    event.preventDefault()
                    searchFieldRef.current?.focus()

                    if (searchFieldRef.current?.value)
                        setCurrentSheets(
                            sheets.filter(
                                (sheet) =>
                                    sheet.language.id == currentLanguage.id &&
                                    (sheet.title.includes(searchFieldRef.current!.value) ||
                                        sheet.keywords.includes(searchFieldRef.current!.value) ||
                                        sheet.code.includes(searchFieldRef.current!.value))
                            )
                        )
                } else if (event.key === "Escape") {
                    searchFieldRef.current?.blur()
                } else if (event.key === "Enter") {
                    console.log(currentSheets)
                    if (currentSheets.length == 1) openSheetModal(currentSheets[0])
                } else if (event.key === "ArrowDown") {
                    navigateLanguage(1)
                } else if (event.key === "ArrowUp") {
                    navigateLanguage(-1)
                }
            }
        }

        window.addEventListener("keydown", onKeyDown)

        return () => {
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [terminal.modal, currentSheets, currentLanguage])

    return (
        <div className="Code-Page" style={styles.body}>
            <SearchField innerRef={searchFieldRef} />
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
                            <MenuItem
                                sx={menuStyle}
                                key={language.id}
                                onClick={() => {
                                    setCurrentLanguage(language)
                                    setCurrentSheets(sheets.filter((sheet) => sheet.language.id == language.id))
                                }}
                            >
                                {language.name}
                            </MenuItem>
                        )
                    })}
                </div>
                <div style={styles.maincontainer}>
                    <Content />
                </div>
            </div>
        </div>
    )
}
