import { useActiveProject } from "../../../hooks/useActiveProject"
import { useActiveProjectType } from "../../../hooks/useActiveProjectType"
import InfoIcon from '@mui/icons-material/Info';
import './style.scss';
import ReactLoading from 'react-loading';
import { useEffect, useState } from "react";
import { useLanguage } from "../../../hooks/useLanguage";

const Title = ({ project, theme, onInfoClick }) => {
    const [hover, setHover] = useState(false)
    const language = useLanguage().value

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
            <h1>{language == 'portuguese' ? project?.name_pt ? project?.name_pt : project?.name : project?.name}</h1>
            <InfoIcon onClick={() => onInfoClick()} sx={[info_style, hover ? {width: '4.5vw', height: '4.5vw'} : null]} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} />
        </div>
    )
}

const Description = ({ project, active, theme }) => {
    const language = useLanguage().value

    return (
        <div className="description" style={{right: active ? '4.7vw' : null, borderLeft: '0.3vw solid '+theme}}>
            <p>{language == 'portuguese' ? project?.description_pt ? project?.description_pt : project?.description : project?.description}</p>
        </div>
    )
}

const WebProject = ({ project, theme }) => {
    const [loading, setLoading] = useState(true)
    const [info, setInfo] = useState(true)

    useEffect(() => {
        setLoading(true)
        setInfo(false)

    }, [project])

    return (
        <div className="web-project">
            <Title project={project} theme={theme} onInfoClick={() => setInfo(!info)} />
            <iframe onLoad={() => {setLoading(false)}} style={{backgroundColor: 'white', width: '65vw', height: '30vw', display: loading ? 'none' : 'block'}} src={project?.url} frameborder="0"></iframe>
			<div className="loading-container" style={{display: loading ? 'flex' : 'none', width: '65vw', height: '30vw', justifyContent: 'center'}}>
                <ReactLoading style={{fill: theme, width: '5vw'}} className='loading' type={'cylon'} color={theme} height={'65vw'} width={'30vw'} />
            </div>
            <Description project={project} active={info} theme={theme} />
        </div>
    )
}

const MobileProject = ({ project, theme }) => {
    const [info, setInfo] = useState(false)

    useEffect(() => {
        setInfo(true)

    }, [project])

    return (
        <div className="web-project">
            <Title project={project} theme={theme} onInfoClick={() => setInfo(!info)} />
            <div className="loading-container" style={{width: '65vw', height: '30vw', justifyContent: 'center'}}>
                <p>on development</p>
            </div>
            <Description project={project} active={info} theme={theme} />
        </div>
    )
}

const RpaProject = ({ project, theme }) => {
    const [info, setInfo] = useState(false)

    useEffect(() => {
        setInfo(true)

    }, [project])

    return (
        <div className="web-project">
            <Title project={project} theme={theme} onInfoClick={() => setInfo(!info)} />
            <div className="loading-container" style={{width: '65vw', height: '30vw', justifyContent: 'center'}}>
                <p>on development</p>
            </div>
            <Description project={project} active={info} theme={theme} />
        </div>
    )
}

const GameProject = ({ project, theme }) => {
    const [info, setInfo] = useState(false)

    useEffect(() => {
        setInfo(true)

    }, [project])

    return (
        <div className="web-project">
            <Title project={project} theme={theme} onInfoClick={() => setInfo(!info)} />
            <div className="loading-container" style={{width: '65vw', height: '30vw', justifyContent: 'center'}}>
                <p>on development</p>
            </div>
            <Description project={project} active={info} theme={theme} />
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