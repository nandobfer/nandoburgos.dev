import './style.scss';
import COLORS from '../../sass/_colors.scss'
import { useState } from 'react';
import { useEffect } from 'react';
import { useActiveProjectType } from '../../hooks/useActiveProjectType';

const HeaderButton = ({ type, theme, onHeaderClick }) => {
    const active_project_type = useActiveProjectType()

    const [hover, setHover] = useState(false)
    const [active, setActive] = useState(false)


    const active_style = {
        backgroundColor: type.color,
        color: 'black',
        fontWeight: 'bold'
    }

    useEffect(() => {
        if(active_project_type.value.name != type.name) {
            setActive(false)
        } else {
            setActive(true)
        }

    }, [theme.value])

    return (
        <div className="header-button" onClick={() => onHeaderClick(type)} style={active ? active_style : hover ? active_style : null} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <p>{type.name}</p>
        </div>
    )
}

export const ProjectsHeader = ({ theme }) => {

    const active_project_type = useActiveProjectType()

    const dev_types = [
        {
            name: 'web',
            color: COLORS.yellow,
        },
        {
            name: 'mobile',
            color: COLORS.green,
        },
        {
            name: 'rpa',
            color: COLORS.blue,
        },
        {
            name: 'games',
            color: COLORS.red,
        },
    ]

    const onHeaderClick = (type) => {
        active_project_type.setValue(type)
        theme.setValue(type.color)
    }

    useEffect(() => {
        onHeaderClick(dev_types[0])
    }, [])
    
    return (
        <div className='ProjectsHeader-Component' >
            {dev_types.map(type => {
                return <HeaderButton key={dev_types.indexOf(type)} type={type} theme={theme} onHeaderClick={onHeaderClick} />
            })}
        </div>
    )
}