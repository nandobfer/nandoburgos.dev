import { useActiveProject } from "../../../hooks/useActiveProject"
import { useActiveProjectType } from "../../../hooks/useActiveProjectType"
import './style.scss';

const WebProject = ({ project }) => {
    
    return (
        <div className="web-project">
            <div className="title">
                <div className="icons">
                    {project?.technologies.map(technology => {
                        return technology.icon
                    })}
                </div>
                <h1>{project?.name}</h1>
            </div>
            <iframe width={1000} height={500} src={project?.url} frameborder="0"></iframe>
        </div>
    )
}

const MobileProject = ({ project }) => {
    return (
        <div className="web-project">
            <h1>on development</h1>
            <p>mobile</p>
            <p>{project?.name}</p>
        </div>
    )
}

const RpaProject = ({ project }) => {
    return (
        <div className="web-project">
            <h1>on development</h1>
            <p>rpa</p>
            <p>{project?.name}</p>
        </div>
    )
}

const GameProject = ({ project }) => {
    return (
        <div className="web-project">
            <h1>on development</h1>
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