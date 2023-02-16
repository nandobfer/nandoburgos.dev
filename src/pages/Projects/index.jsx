import { useState } from 'react';
import { useEffect } from 'react';
import { ProgrammingIcons } from '../../components/ProgrammingIcons';
import { ProjectsHeader } from '../../components/ProjectsHeader';
import { ActiveProjectTypeProvider } from '../../contexts/ActiveProjectTypeContext';
import { useActiveProjectType } from '../../hooks/useActiveProjectType';
import './style.scss';

export const Projects = () => {

    const active_project_type = useActiveProjectType()
    
    const [theme, setTheme] = useState(null)

    useEffect(() => {
        // alert(theme)
    }, [theme])

    useEffect(() => {
        document.title = 'nandoburgos.dev - Projects'
    }, [])
    
    return (
        <div className="Projects-page">
            <ActiveProjectTypeProvider>
                <ProjectsHeader theme={{value: theme, setValue: setTheme}} />
                <hr style={{borderTop: '5px solid '+theme}} />

                <h1>Still thinking in a fun way to display the projects</h1>
                <ProgrammingIcons />
            </ActiveProjectTypeProvider>
        </div>
    )
}