import React from "react"
import styles from "./styles"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    return <div className="Home-Page" style={styles.body}></div>
}
