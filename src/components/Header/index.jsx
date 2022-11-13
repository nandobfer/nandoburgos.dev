import { HeaderButton } from '../HeaderButton';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import './style.scss';
import { useState } from 'react';
import COLORS from '../../sass/_colors.scss'

export const Header = () => {
    const [homeIconColor, setHomeIconColor] = useState('white')
    const [githubIconColor, setGithubIconColor] = useState('white')
    
    return (
        <div className="Header-component">
            <div className="home-icon icon">
                <HomeIcon 
                    onMouseEnter={() => setHomeIconColor(COLORS.blue_light)} 
                    onMouseLeave={() => setHomeIconColor('white')} 
                    sx={{ color: homeIconColor, fontSize: 70 }} />
            </div>
            <div className="header-buttons">
                <HeaderButton color={COLORS.blue}>PROJETOS</HeaderButton>
                <HeaderButton color={COLORS.red}>CHEATSHEET</HeaderButton>
                <HeaderButton color={COLORS.yellow}> SOBRE</HeaderButton>
            </div>
            <div className="github-icon icon">
                <GitHubIcon 
                    onMouseEnter={() => setGithubIconColor(COLORS.blue_light)} 
                    onMouseLeave={() => setGithubIconColor('white')} 
                    sx={{ color: githubIconColor, fontSize: 70 }} />
            </div>
        </div>
    )
}