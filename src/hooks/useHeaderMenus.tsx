import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone"
import HomeIcon from "@mui/icons-material/Home"
import TerminalIcon from "@mui/icons-material/Terminal"

export interface HeaderMenu {
    id: number
    title: string
    location: string
    icon: React.ReactElement
}

export const useHeaderMenus = () => {
    const menus: HeaderMenu[] = [
        {
            id: 1,
            icon: <HomeIcon />,
            location: "/",
            title: "Home",
        },
        {
            id: 2,
            icon: <TerminalIcon />,
            location: "/code",
            title: "Code",
        },
    ]

    return menus
}
