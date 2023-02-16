import { useEffect } from 'react';
import { useState } from 'react';
import { useActiveProjectType } from '../../hooks/useActiveProjectType';
import { useProjects } from '../../hooks/useProjects';
import './style.scss';

const ProjectButton = ({ project, currentProject, onProjectClick }) => {
    const active_project_type = useActiveProjectType()

    const [hover, setHover] = useState(false)
    const [active, setActive] = useState(false)


    const active_style = {
        backgroundColor: active_project_type.value.color,
        color: 'black',
        fontWeight: 'bold'
    }

    useEffect(() => {
        if (currentProject) {

            if(currentProject.name != project.name) {
                setActive(false)
            } else {
                setActive(true)
            }
        }

    }, [currentProject])

    return (
        <div className="project-button" onClick={() => onProjectClick(project)} style={active ? active_style : hover ? active_style : null} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <p>{project.name}</p>
        </div>
    )
}

export const ProjectsList = () => {

    const active_project_type = useActiveProjectType()
    const all_projects = useProjects()

    const [projects, setProjects] = useState([])
    const [currentProject, setCurrentProject] = useState(null)

    const onProjectClick = (project) => {
        setCurrentProject(project)
    }

    useEffect(() => {
        setProjects(all_projects[active_project_type.value.name])
    }, [active_project_type.value])

    useEffect(() => {
        if (projects) {
            onProjectClick(projects[0])
        }
    }, [projects])
    
    return (
        <div className='ProjectsList-Component' >
            {projects?.map(project => {
                return (
                    <ProjectButton key={projects.indexOf(project)} 
                        project={project} 
                        currentProject={currentProject} 
                        onProjectClick={onProjectClick}
                    />
                )
            })}
        </div>
    )
}