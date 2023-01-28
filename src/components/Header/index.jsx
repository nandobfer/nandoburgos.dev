import { HeaderButton } from '../HeaderButton';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import './style.scss';
import { useState } from 'react';
import COLORS from '../../sass/_colors.scss'
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const [homeIconColor, setHomeIconColor] = useState('white')
    const [githubIconColor, setGithubIconColor] = useState('white')
    const navigate = useNavigate()

    const openURL = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    
    return (
        <div className="Header-component">
            <div className="home-icon icon">
                <HomeIcon 
                    onMouseEnter={() => setHomeIconColor(COLORS.blue)} 
                    onMouseLeave={() => setHomeIconColor('white')} 
                    sx={{ color: homeIconColor, fontSize: 70 }}
                    onClick={() => navigate('/')} />
            </div>
            <div className="header-buttons">
                <HeaderButton color={COLORS.blue} onClick={() => navigate('/projects')} >PROJETOS</HeaderButton>
                <HeaderButton color={COLORS.red} onClick={() => navigate('/cheatsheet')}>CHEATSHEET</HeaderButton>
                <HeaderButton color={COLORS.yellow} onClick={() => navigate('/about')} > SOBRE</HeaderButton>
            </div>
            <div className="github-icon icon">
                <GitHubIcon 
                    onMouseEnter={() => setGithubIconColor(COLORS.blue)} 
                    onMouseLeave={() => setGithubIconColor('white')} 
                    sx={{ color: githubIconColor, fontSize: 70 }} 
                    onClick={() => openURL('https://github.com/nandobfer')} />
            </div>
        </div>
    )
}