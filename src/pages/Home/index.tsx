import React, { useEffect } from "react"
import styles from "./styles"
import { useTerminal } from "../../hooks/useTerminal"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    return <div className="Home-Page" style={styles.body}></div>
}
