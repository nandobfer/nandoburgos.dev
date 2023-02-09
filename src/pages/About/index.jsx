import './style.scss';
import COLORS from '../../sass/_colors.scss'
import { ProgrammingIcons } from '../../components/ProgrammingIcons';
import { useEffect } from 'react';

export const About = () => {

    useEffect(() => {
        document.title = 'nandoburgos.dev - About'
    }, [])
    
    return (
        <div className="About-page">
            <div className="languages">
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
            </div>
            <ProgrammingIcons />
        </div>
    )
}