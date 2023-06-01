import React, { useEffect } from "react"
import { Language, Sheet } from "../../definitions/languages"
import { Paper, Skeleton } from "@mui/material"
import styles from "./styles"
import { useCurrentSheets } from "../../hooks/useCurrentSheets"
import { useArray } from "burgos-array"
import { SheetContainer } from "./SheetContainer"

interface ContentProps {}

export const Content: React.FC<ContentProps> = ({}) => {
    const skeletons = useArray().newArray(8)
    const { currentSheets } = useCurrentSheets()

    return (
        <>
            {currentSheets.length > 0 ? (
                currentSheets.map((sheet) => <SheetContainer key={sheet.id} sheet={sheet} />)
            ) : (
                <>
                    {skeletons.map((index) => (
                        <Skeleton key={index} variant="rounded" sx={styles.skeleton} animation="wave" />
                    ))}
                </>
            )}
        </>
    )
}
