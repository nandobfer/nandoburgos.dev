import { useEffect } from 'react';
import { useState } from 'react';
import { useActiveProject } from '../../hooks/useActiveProject';
import { useActiveProjectType } from '../../hooks/useActiveProjectType';
import { useLanguage } from '../../hooks/useLanguage';
import { useProjects } from '../../hooks/useProjects';
import './style.scss';

const ProjectButton = ({ project, currentProject, onProjectClick }) => {
    const active_project_type = useActiveProjectType()
    const language = useLanguage().value

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
            <p>{language == 'portuguese' ? project?.name_pt ? project.name_pt : project.name : project.name}</p>
        </div>
    )
}

export const ProjectsList = () => {

    const active_project_type = useActiveProjectType()
    const active_project = useActiveProject()
    const all_projects = useProjects()

    const [projects, setProjects] = useState([])
    const [currentProject, setCurrentProject] = useState(null)

    const onProjectClick = (project) => {
        setCurrentProject(project)
        active_project.setValue(project)
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