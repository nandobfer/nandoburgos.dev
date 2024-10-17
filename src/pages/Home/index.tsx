import React, { useEffect } from "react"
import styles from "./styles"
import { useTerminal } from "../../hooks/useTerminal"
import { useExecute } from "../../hooks/useExecute"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    const execute = useExecute()
    return (
        <div className="Home-Page" style={styles.body}>
            HELLO WORLD
        </div>
    )
}
