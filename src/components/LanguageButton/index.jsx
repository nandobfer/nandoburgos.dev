import { useEffect, useState } from 'react';
import './style.scss';

export const LanguageButton = ({ children, language, color, theme, setTheme, onClick }) => {
    
    const [hovered, setHovered] = useState(false)
    const [active, setActive] = useState(false)

    useEffect(() => {
        if(theme != color) {
            setActive(false)
        }

    }, [theme])

    const onLanguageClick = () => {
        setTheme(color)
        setActive(true)
    }
    
    return (
        <div className="LanguageButton-component"
        style={{backgroundColor: active ? color : hovered ? color : null, color: active ? 'black' : hovered ? 'black' : null}} 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            onClick={() => onLanguageClick()} >
                {children}
        </div>
    )
}