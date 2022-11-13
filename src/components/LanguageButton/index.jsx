import { useEffect, useState } from 'react';
import './style.scss';

export const LanguageButton = ({ children, setLanguage, language, theme, onClick }) => {
    
    const [hovered, setHovered] = useState(false)
    const [active, setActive] = useState(false)
    language.active = active
    language.setActive = setActive

    useEffect(() => {
        if(theme.value !== language.color) {
            setActive(false)
        }

    }, [theme.value])

    const onLanguageClick = () => {
        theme.set(language.color)
        setActive(true)
        setLanguage(children)
    }
    
    return (
        <div className="LanguageButton-component"
        style={{backgroundColor: active ? language.color : hovered ? language.color : null, color: active ? 'black' : hovered ? 'black' : null}} 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            onClick={() => onLanguageClick()} >
                {children}
        </div>
    )
}