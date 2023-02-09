import { useEffect } from 'react';
import { ProgrammingIcons } from '../../components/ProgrammingIcons';
import './style.scss';

export const Projects = () => {

    useEffect(() => {
        document.title = 'nandoburgos.dev - Projects'
    }, [])
    
    return (
        <div className="Projects-page">
            <h1>Still thinking in a fun way to display the projects</h1>
            <ProgrammingIcons />
        </div>
    )
}