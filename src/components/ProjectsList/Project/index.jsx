import { useActiveProject } from "../../../hooks/useActiveProject"
import { useActiveProjectType } from "../../../hooks/useActiveProjectType"
import InfoIcon from '@mui/icons-material/Info';
import './style.scss';
import ReactLoading from 'react-loading';
import { useEffect, useState } from "react";
import { useLanguage } from "../../../hooks/useLanguage";
import { useMediaQuery } from "react-responsive";

const Title = ({ project, theme, onInfoClick }) => {
    const [hover, setHover] = useState(false)
    const language = useLanguage().value
    const isMobile = useMediaQuery({maxWidth:600})

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
            <h1>{isMobile ? null : language == 'portuguese' ? project?.name_pt ? project?.name_pt : project?.name : project?.name}</h1>
            <InfoIcon onClick={() => onInfoClick()} sx={[info_style, hover ? {width: '4.5vw', height: '4.5vw'} : null]} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} />
        </div>
    )
}

const Description = ({ project, active, theme }) => {
    const language = useLanguage().value
    const isMobile = useMediaQuery({maxWidth:600})

    return (
        <div className="description" style={{right: active ? '1vw' : null, borderLeft: isMobile? null : '0.3vw solid '+theme, borderTop: isMobile? '0.3vw solid '+theme : null}}>
            <p>{language == 'portuguese' ? project?.description_pt ? project?.description_pt : project?.description : project?.description}</p>
        </div>
    )
}

const ProjectContainer = ({ project, theme, children, type, loading }) => {
    const [info, setInfo] = useState(type == 'web' ? true : false)
    const isMobile = useMediaQuery({maxWidth:600})

    useEffect(() => {
        setInfo(type == 'web' ? false : true)

    }, [project])

    return (
    <div className="web-project">
        <Title project={project} theme={theme} onInfoClick={() => setInfo(!info)} />
        {children}
        <div className="loading-container" style={{display: loading ? 'flex' : 'none', width: '65vw', height: isMobile ? '128vw' :  '30vw', justifyContent: 'center'}}>
            <ReactLoading style={{fill: theme, width: isMobile ? '20vw' : '5vw', marginBottom: isMobile ? '100%' : null}} className='loading' type={'cylon'} color={theme} height={'65vw'} width={'30vw'} />
        </div>
        <Description project={project} active={info} theme={theme} />
    </div>
    )
}

const WebProject = ({ project, theme }) => {
    const [loading, setLoading] = useState(true)
    const [info, setInfo] = useState(true)
    const isMobile = useMediaQuery({maxWidth:600})

    useEffect(() => {
        setLoading(true)

    }, [project])

    return (
        <div className="web-project">
            <ProjectContainer project={project} theme={theme} loading={loading} type='web'>
                <iframe onLoad={() => {setLoading(false)}} style={{backgroundColor: 'white', width: '65vw', height: isMobile ? '128vw' :  '30vw', display: loading ? 'none' : 'block'}} src={project?.url} frameBorder="0"></iframe>
            </ProjectContainer>
        </div>
    )
}

const MobileProject = ({ project, theme }) => {
    const [info, setInfo] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setInfo(true)

    }, [project])

    return (
        <div className="web-project">
            <ProjectContainer project={project} theme={theme} loading={loading} type='mobile'>

            </ProjectContainer>
        </div>
    )
}

const RpaProject = ({ project, theme }) => {
    const [info, setInfo] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setInfo(true)

    }, [project])

    return (
        <div className="web-project">
            <ProjectContainer project={project} theme={theme} loading={loading} type='mobile'>
                
            </ProjectContainer>
        </div>
    )
}

const GameProject = ({ project, theme }) => {
    const [info, setInfo] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setInfo(true)

    }, [project])

    return (
        <div className="web-project">
            <ProjectContainer project={project} theme={theme} loading={loading} type='mobile'>
                
            </ProjectContainer>
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