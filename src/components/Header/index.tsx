import React from "react"
import styles from "./styles"
import { useHeaderMenus } from "../../hooks/useHeaderMenus"
import { Menu } from "./Menu"
import { MenuItem } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import colors from "../../colors"
import { useDarkMode } from "../../hooks/useDarkMode"

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
    const { darkMode, setDarkMode, toogleDarkMode } = useDarkMode()

    const menus = useHeaderMenus()
    return (
        <div className="Header-Component" style={styles.body}>
            {menus.map((menu) => (
                <Menu key={menu.id} menu={menu} />
            ))}
            {/* <MenuItem sx={{ marginLeft: "auto", color: colors.secondary, gap: "0.5vw" }} onClick={() => toogleDarkMode()}>
                <GitHubIcon />
            </MenuItem> */}
            <MenuItem
                sx={{ marginLeft: "auto", color: colors.secondary, gap: "0.5vw" }}
                onClick={() => window.open("https://github.com/nandobfer", "_blank")?.focus()}
            >
                <GitHubIcon />
                github
            </MenuItem>
        </div>
    )
}
