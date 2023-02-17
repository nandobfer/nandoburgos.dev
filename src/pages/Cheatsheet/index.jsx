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
            name: 'python',
            color: COLORS.blue,
        },
        {
            name: 'git',
            color: COLORS.green,
        },
        {
            name: 'javascript',
            color: COLORS.yellow,
        },
        {
            name: 'mysql',
            color: COLORS.orange,
        },
        {
            name: 'powershell',
            color: COLORS.red,
        },
        {
            name: 'bash',
            color: COLORS.pink,
        },
        {
            name: 'vim',
            color: COLORS.purple,
        },
        {
            name: 'todo',
            color: 'white',
        },
    ]
// adicionar seção de categorias ao lado das linguagens, ranger like
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