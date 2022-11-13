import { LanguageButton } from '../../components/LanguageButton';
import './style.scss';
import COLORS from '../../sass/_colors.scss'
import { useEffect, useState } from 'react';

export const Cheatsheet = () => {

    const [theme, setTheme] = useState('white')

    return (
        <div className="Cheatsheet-page">
            <div className="languages-container">
                <LanguageButton color={COLORS.blue} theme={theme} setTheme={setTheme} >Python</LanguageButton>
                <LanguageButton color={COLORS.green} theme={theme} setTheme={setTheme} >Git</LanguageButton>
                <LanguageButton color={COLORS.yellow} theme={theme} setTheme={setTheme} >JavaScript</LanguageButton>
                <LanguageButton color={COLORS.orange} theme={theme} setTheme={setTheme} >Mysql</LanguageButton>
                <LanguageButton color={COLORS.red} theme={theme} setTheme={setTheme} >PowerShell</LanguageButton>
                <LanguageButton color={COLORS.pink} theme={theme} setTheme={setTheme} >Bash</LanguageButton>
            </div>
            <hr style={{borderColor: theme}} />
            <div className="sheet-container">

            </div>
        </div>
    )
}