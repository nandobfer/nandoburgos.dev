import { useEffect } from 'react';
import './style.scss';

export const Projects = () => {

    useEffect(() => {
        document.title = 'nandoburgos.dev - Projects'
    }, [])
    
    return (
        <div className="Projects-page">
            <h1>Still thinking in a fun way to display the projects</h1>
        </div>
    )
}