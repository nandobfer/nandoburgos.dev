import { useActiveProject } from "../../../hooks/useActiveProject"
import { useActiveProjectType } from "../../../hooks/useActiveProjectType"
import InfoIcon from '@mui/icons-material/Info';
import './style.scss';
import { useState } from "react";

const WebProject = ({ project, theme }) => {

    const [hover, setHover] = useState(false)

    const info_style = {
        color: theme, 
        width: '4vw', 
        height: '4vw', 
        marginLeft: 'auto', 
        cursor: 'pointer',
        transition: '0.3s',
    }  

    return (
        <div className="web-project">
            <div className="title">
                <div className="icons">
                    {project?.technologies?.map(technology => {
                        return technology.icon
                    })}
                </div>
                <h1>{project?.name}</h1>
                <InfoIcon sx={[info_style, hover ? {width: '4.5vw', height: '4.5vw'} : null]} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} />
            </div>
            <iframe style={{width: '65vw', height: '30vw'}} src={project?.url} frameborder="0"></iframe>
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

export const Project = ({ }) => {
    
    const project = useActiveProject().value
    const project_type = useActiveProjectType().value
    
    return (
        <div className='Project-Component' >
            {
            project_type.name == 'web' ? 
            <WebProject project={project} theme={project_type.color} /> : 
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