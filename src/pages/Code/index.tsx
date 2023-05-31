import React from "react"
import styles from "./styles"
import { TextField } from "@mui/material"

interface CodeProps {}

export const Code: React.FC<CodeProps> = ({}) => {
    return (
        <div className="Code-Page" style={styles.body}>
            <TextField value="nandoburgos.dev" />
        </div>
    )
}
