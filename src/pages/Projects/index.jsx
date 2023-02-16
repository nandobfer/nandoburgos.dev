import { useState } from 'react';
import { useEffect } from 'react';
import { ProgrammingIcons } from '../../components/ProgrammingIcons';
import { ProjectsHeader } from '../../components/ProjectsHeader';
import { ProjectsList } from '../../components/ProjectsList';
import { Project } from '../../components/ProjectsList/Project';
import { ActiveProjectProvider } from '../../contexts/ActiveProjectContext';
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
                <ActiveProjectProvider>
                <ProjectsHeader theme={{value: theme, setValue: setTheme}} />
                <hr style={{borderTop: '5px solid '+theme}} />
                <div className="projects-container">
                    <ProjectsList />
                    <hr style={{borderLeft: '5px solid '+theme}} />
                    <Project />
                </div>

                </ActiveProjectProvider>
            </ActiveProjectTypeProvider>
        </div>
    )
}