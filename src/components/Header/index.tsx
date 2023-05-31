import React from "react"
import styles from "./styles"
import { useHeaderMenus } from "../../hooks/useHeaderMenus"
import { Menu } from "./Menu"

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
    const menus = useHeaderMenus()
    return (
        <div className="Header-Component" style={styles.body}>
            {menus.map((menu) => (
                <Menu key={menu.id} menu={menu} />
            ))}
        </div>
    )
}
