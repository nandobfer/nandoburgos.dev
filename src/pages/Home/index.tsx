import React from "react"
import styles from "./styles"
import { TextField } from "@mui/material"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    return (
        <div className="Home-Page" style={styles.body}>
            <TextField value="nandoburgos.dev" />
        </div>
    )
}
