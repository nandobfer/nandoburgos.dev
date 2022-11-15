import { LanguageButton } from '../../components/LanguageButton';
import './style.scss';
import COLORS from '../../sass/_colors.scss'
import { useEffect, useState } from 'react';
import { api } from '../../api';
import { LanguageSheet } from '../../components/LanguageSheet';

export const Cheatsheet = () => {

    const [theme, setTheme] = useState('white')
    const [language, setLanguage] = useState('')
    const [cheats, setCheats] = useState([])
    const [loaded, setLoaded] = useState(false)

    const languages = [
        {
            name: 'Python',
            color: COLORS.blue,
        },
        {
            name: 'Git',
            color: COLORS.green,
        },
        {
            name: 'JavaScript',
            color: COLORS.yellow,
        },
        {
            name: 'Mysql',
            color: COLORS.orange,
        },
        {
            name: 'PowerShell',
            color: COLORS.red,
        },
        {
            name: 'Bash',
            color: COLORS.pink,
        },
    ]

    const getSheet = () => {
        if (!language) return false
        api.post('/get_sheet', {language: language.toLowerCase()})
        .then((response) => {
            const data = response.data
            if (data) {
                setCheats(data)
            } else {
                setCheats([])
            }
        })
        .catch((error) => {
            console.error(error)
        })
    }

    useEffect(() => {
        getSheet()
    }, [language])

    useEffect(() => {
        document.title = 'NandoBurgos.dev - Cheat-Sheet'
    }, [])

    return (
        <div className="Cheatsheet-page">
            <div className="languages-container">
                {languages.map(item => {
                    return (
                        <LanguageButton 
                            key={item.name} 
                            setLanguage={setLanguage}
                            theme={{ value: theme, set: setTheme }}
                            language={item}
                            loaded={loaded}
                                >{item.name}
                        </LanguageButton>
                    )
                })}
            </div>
            <hr style={{borderColor: theme}} />
            <div className="sheet-container">
                { cheats 
                ? <LanguageSheet cheats={cheats} setCheats={setCheats} language={language} theme={theme} />
                : <h1>tchau</h1>  
                }
            </div>
        </div>
    )
}