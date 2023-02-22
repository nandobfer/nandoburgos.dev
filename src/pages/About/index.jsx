import './style.scss';
import COLORS from '../../sass/_colors.scss'
import { ProgrammingIcons } from '../../components/ProgrammingIcons';
import { useEffect } from 'react';
import { useLanguage } from '../../hooks/useLanguage';

export const About = () => {

    const language = useLanguage().value

    useEffect(() => {
        document.title = 'nandoburgos.dev - About'
    }, [])
    
    return (
        <div className="About-page">
            {language == 'english' ? <div className="languages">
                <div className="contacts">
                    <h1>contact</h1>
                    <p><span>phone</span>: +55 41984556795</p>
                    <p><span>e-mail</span>: nandobfer@gmail.com</p>
                    <p><span>discord</span>: Burgos#5587</p>
                </div>
                <h1>technologies</h1>
                <p>advanced programming in <span style={{color: COLORS.blue}}>Python</span> (Flask, CRUDs, RPAs)</p>
                <p>advanced programming in <span style={{color: COLORS.yellow}}>JavaScript</span> (Node.js, React.js, React Native, jQuery, electron)</p>
                <p>intermediate programming in Luascript</p>
                <p>intermediate programming in <span style={{color: COLORS.pink}}>Bash</span> and <span style={{color: COLORS.red}}>Powershell</span></p>
                <p>basic programming in C, C++ e C#</p>
                <p>basic programming in PHP</p>
                <br />
                <p>aptitude with databases <span style={{color: COLORS.orange}}>Mysql</span> and Sql Server</p>
                <p>aptitude with HTML and CSS (Sass)</p>
                <p>aptitude with Windows and Linux (Ubuntu and CentOs) and full control using just a terminal</p>
                <p>aptitude with repository version control <span style={{color: COLORS.green}}>Git</span></p>
            </div> : <div className="languages">
                <div className="contacts">
                    <h1>contato</h1>
                    <p><span>telefone</span>: +55 41984556795</p>
                    <p><span>e-mail</span>: nandobfer@gmail.com</p>
                    <p><span>discord</span>: Burgos#5587</p>
                </div>
                <h1>tecnologias</h1>
                <p>programação avançada em <span style={{color: COLORS.blue}}>Python</span> (Flask, CRUDs, RPAs)</p>
                <p>programação avançada em <span style={{color: COLORS.yellow}}>JavaScript</span> (Node.js, React.js, React Native, jQuery, electron)</p>
                <p>programação intermediária em Luascript</p>
                <p>programação intermediária em <span style={{color: COLORS.pink}}>bash</span> e <span style={{color: COLORS.red}}>Powershell</span></p>
                <p>programação básica em C, C++ e C#</p>
                <p>programação básica em PHP</p>
                <br />
                <p>domínio de bancos de dados <span style={{color: COLORS.orange}}>Mysql</span> e Sql Server</p>
                <p>domínio de HTML e CSS (Sass)</p>
                <p>domínio de Windows e Linux (Ubuntu e CentOs) e controle total usando apenas o terminal</p>
                <p>domínio de versionamento de repositório com <span style={{color: COLORS.green}}>Git</span></p>
            </div>}
            <ProgrammingIcons />
        </div>
    )
}