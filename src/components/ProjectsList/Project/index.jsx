import { useActiveProject } from "../../../hooks/useActiveProject"
import { useActiveProjectType } from "../../../hooks/useActiveProjectType"
import './style.scss';

const WebProject = ({ project }) => {
    return (
        <div className="web-project">
            <iframe width={1000} height={500} src={project?.url} frameborder="0"></iframe>
        </div>
    )
}

const MobileProject = ({ project }) => {
    return (
        <div className="web-project">
            <p>mobile</p>
            <p>{project?.name}</p>
        </div>
    )
}

const RpaProject = ({ project }) => {
    return (
        <div className="web-project">
            <p>rpa</p>
            <p>{project?.name}</p>
        </div>
    )
}

const GameProject = ({ project }) => {
    return (
        <div className="web-project">
            <p>game</p>
            <p>{project?.name}</p>
        </div>
    )
}

export const Project = ({  }) => {
    
    const project = useActiveProject().value
    const project_type = useActiveProjectType().value
    
    return (
        <div className='Project-Component' >
            <h1>on development</h1>
            {
            project_type.name == 'web' ? 
            <WebProject project={project} /> : 
            project_type.name == 'mobile' ? 
            <MobileProject project={project} /> : 
            project_type.name == 'rpa' ? 
            <RpaProject project={project} /> : 
            project_type.name == 'games' ? 
            <GameProject project={project} /> : 
            null
            }
        </div>
    )
}