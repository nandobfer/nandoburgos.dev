import React from "react"
import styles from "./styles"
import { SearchField } from "../../components/SearchField"

interface CodeProps {}

export const Code: React.FC<CodeProps> = ({}) => {
    return (
        <div className="Code-Page" style={styles.body}>
            <SearchField />
        </div>
    )
}
