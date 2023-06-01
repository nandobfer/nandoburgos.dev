import React from "react"
import { Language, Sheet } from "../../definitions/languages"
import { Paper, Skeleton } from "@mui/material"
import styles from "./styles"
import { useCurrentSheets } from "../../hooks/useCurrentSheets"
import { useArray } from "burgos-array"

interface ContentProps {}

export const Content: React.FC<ContentProps> = ({}) => {
    const skeletons = useArray().newArray(5)
    const { currentSheets } = useCurrentSheets()

    return (
        <>
            {currentSheets.length > 0 ? (
                currentSheets.map((sheet) => (
                    <Paper key={sheet.id} sx={styles.sheet} elevation={2}>
                        <p style={styles.title}>{sheet.title}</p>
                        <p>{sheet.code}</p>
                    </Paper>
                ))
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
