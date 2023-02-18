import { useActiveProject } from "../../../hooks/useActiveProject"
import { useActiveProjectType } from "../../../hooks/useActiveProjectType"
import InfoIcon from '@mui/icons-material/Info';
import './style.scss';
import ReactLoading from 'react-loading';
import { useEffect, useState } from "react";

const Title = ({ project, theme }) => {
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
        <div className="title">
            <div className="icons">
                {project?.technologies?.map(technology => {
                    return technology.icon
                })}
            </div>
            <h1>{project?.name}</h1>
            <InfoIcon sx={[info_style, hover ? {width: '4.5vw', height: '4.5vw'} : null]} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} />
        </div>
    )
}

const WebProject = ({ project, theme }) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
    }, [project])

    return (
        <div className="web-project">
            <Title project={project} theme={theme} />
            <iframe onLoad={() => {setLoading(false)}} style={{width: '65vw', height: '30vw', display: loading ? 'none' : 'block'}} src={project?.url} frameborder="0"></iframe>
			<div className="loading-container" style={{display: loading ? 'flex' : 'none', width: '65vw', height: '30vw', justifyContent: 'center'}}>
                <ReactLoading style={{fill: theme, width: '5vw'}} className='loading' type={'cylon'} color={theme} height={'65vw'} width={'30vw'} />
            </div>
        </div>
    )
}

const MobileProject = ({ project, theme }) => {
    return (
        <div className="web-project">
            <Title project={project} theme={theme} />
        </div>
    )
}

const RpaProject = ({ project, theme }) => {
    return (
        <div className="web-project">
            <Title project={project} theme={theme} />
        </div>
    )
}

const GameProject = ({ project, theme }) => {
    return (
        <div className="web-project">
            <Title project={project} theme={theme} />
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
            <MobileProject project={project} theme={project_type.color} /> : 
            project_type.name == 'rpa' ? 
            <RpaProject project={project} theme={project_type.color} /> : 
            project_type.name == 'games' ? 
            <GameProject project={project} theme={project_type.color} /> : 
            null
            }
        </div>
    )
}