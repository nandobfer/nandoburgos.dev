import { useLanguage } from '../../../hooks/useLanguage';
import './style.scss';
import COLORS from '../../../sass/_colors.scss'
import { useState } from 'react';
import { useEffect } from 'react';

const Language = ({ language, text }) => {
    const languageContext = useLanguage()
    const [active, setActive] = useState(false)

    useEffect(() => {
        if (languageContext.value == language) {
            setActive(true)
        } else {
            setActive(false)
        }

    }, [languageContext.value])

    return (
        <p style={active ? {color: COLORS.blue} : null} onClick={() => languageContext.setValue(language)}>{text}</p>
    )
}

export const LanguageButtons = () => {
    
    return (
        <div className='LanguageButtons-Component' >
            <Language language={'portuguese'} text={'português'} />
            <hr />
            <Language language={'english'} text={'english'} />
        </div>
    )
}