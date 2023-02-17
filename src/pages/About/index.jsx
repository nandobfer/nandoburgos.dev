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
                    <h1>Contact</h1>
                    <p><span>Phone</span>: +55 41984556795</p>
                    <p><span>E-mail</span>: nandobfer@gmail.com</p>
                </div>
                <h1>Technologies</h1>
                <p>Advanced programming in <span style={{color: COLORS.blue}}>Python</span> (Flask, CRUDs, RPAs)</p>
                <p>Advanced programming in <span style={{color: COLORS.yellow}}>JavaScript</span> (Node.js, React.js, React Native, jQuery, Electron)</p>
                <p>Intermediate programming in Luascript</p>
                <p>Intermediate programming in <span style={{color: COLORS.pink}}>Bash</span> and <span style={{color: COLORS.red}}>Powershell</span></p>
                <p>Basic programming in C, C++ e C#</p>
                <p>Basic programming in PHP</p>
                <br />
                <p>Aptitude with databases <span style={{color: COLORS.orange}}>Mysql</span> and Sql Server</p>
                <p>Aptitude with HTML and CSS (Sass)</p>
                <p>Aptitude with Windows and Linux (Ubuntu and CentOs) and full control using just a terminal</p>
                <p>Aptitude with repository version control <span style={{color: COLORS.green}}>Git</span></p>
            </div> : <div className="languages">
                <div className="contacts">
                    <h1>Contato</h1>
                    <p><span>Telefone</span>: +55 41984556795</p>
                    <p><span>E-mail</span>: nandobfer@gmail.com</p>
                </div>
                <h1>Tecnologias</h1>
                <p>Programação avançada em <span style={{color: COLORS.blue}}>Python</span> (Flask, CRUDs, RPAs)</p>
                <p>Programação avançada em <span style={{color: COLORS.yellow}}>JavaScript</span> (Node.js, React.js, React Native, jQuery, Electron)</p>
                <p>Programação intermediária em Luascript</p>
                <p>Programação intermediária em <span style={{color: COLORS.pink}}>Bash</span> e <span style={{color: COLORS.red}}>Powershell</span></p>
                <p>Programação básica em C, C++ e C#</p>
                <p>Programação básica em PHP</p>
                <br />
                <p>Domínio de bancos de dados <span style={{color: COLORS.orange}}>Mysql</span> e Sql Server</p>
                <p>Domínio de HTML e CSS (Sass)</p>
                <p>Domínio de Windows e Linux (Ubuntu e CentOs) e controle total usando apenas o terminal</p>
                <p>Domínio de versionamento de repositório com <span style={{color: COLORS.green}}>Git</span></p>
            </div>}
            <ProgrammingIcons />
        </div>
    )
}