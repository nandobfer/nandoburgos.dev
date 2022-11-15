import { useEffect, useState } from 'react';
import './style.scss';

export const LanguageButton = ({ children, setLanguage, language, theme, loaded }) => {
    
    const [hovered, setHovered] = useState(false)
    const [active, setActive] = useState(false)

    const style = {
        backgroundColor: active ? language.color : hovered ? language.color : null, 
        color: active ? 'black' : hovered ? 'black' : null,
        fontWeight: active ? 'bold' : hovered ? 'bold' : null,
    }
    
    const onLanguageClick = () => {
        theme.set(language.color)
        setActive(true)
        setLanguage(children)
    }

    useEffect(() => {
        if(theme.value !== language.color) {
            setActive(false)
        }

    }, [theme.value])

    useEffect(() => {
        if (language.name.toLowerCase() == 'python') {
            setActive(true)
            theme.set(language.color)
            setLanguage(children)
        }
    }, [loaded])
    
    return (
        <div className="LanguageButton-component"
            style={style} 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            onClick={() => onLanguageClick()} >
                {children}
        </div>
    )
}