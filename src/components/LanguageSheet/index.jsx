import './style.scss';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { useEffect, useRef, useState } from 'react';
import { Form, Input } from 'react-burgos';
import { api } from '../../api';

const Cheat = ({ cheat, theme }) => {
    const [hovered, setHovered] = useState(false)

    const style = {
        backgroundColor: hovered ? theme : null,
        color: hovered ? 'black' : 'white',
    }

    return (
        <div className="Cheat-component" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={style}>
            <p className="cheat-title">{cheat.title}</p>
            {cheat.description.split('<br>').map(item => {
                return <p key={item} className="cheat-description">{item}</p>
            })}
            <hr style={{borderColor: theme}} />
        </div>
    )
}

export const LanguageSheet = ({ cheats, setCheats, language, theme }) => {
    
    const [iconColor, setIconColor] = useState(theme)
    const [xIconColor, setXIconColor] = useState(theme)
    const [newCheat, setNewCheat] = useState(false)
    const newCheatRef = useRef(null)

    const whiteButtons = () => {
        setIconColor('white')
        setXIconColor('white')
    }

    const onClickNewCheat = () => {
        setNewCheat(true)
        whiteButtons()
    }

    const onClickX = () => {
        setNewCheat(false)
        whiteButtons()
    }

    const onFormSubmit = (values) => {
        api.post('/new_cheat', {...values, language: language.toLowerCase()})
        .then((response) => {
            console.log(response.data)
            setCheats(response.data)
            setNewCheat(false)
            setIconColor('white')
            setXIconColor('white')
        })
        .catch(error => {
            console.error(error)
        })
    }

    const inputs = {
        title: '',
        description: '',
    }

    useEffect(() => {
        if (newCheat) {
            newCheatRef.current?.scrollIntoView({ behavior: "smooth" })
        }
    }, [newCheat])

    useEffect(() => {
        setNewCheat(false)

    }, [language])

    return (
        <div className="LanguageSheet-component" >
            {cheats.map(item => {
                return (
                    <Cheat key={item.id} cheat={item} theme={theme} />
                )
            })}
            { language ? <div className="add-cheat-container">
                { !newCheat ? 
                    <div className="add-cheat-icon">
                        <AddCircleIcon onMouseEnter={() => setIconColor(theme)}
                            onMouseLeave={() => setIconColor('white')}
                            sx={{ color: iconColor, fontSize: 70 }}
                            onClick={onClickNewCheat}
                        />
                    </div> : 
                    <Form initialValues={inputs} onSubmit={values => onFormSubmit(values)}>
                        <div className="input-wrapper" ref={newCheatRef}>
                            <div className="input-container">
                                <label htmlFor="title">Título</label>
                                <Input style={{outlineColor: theme}} id='title' />
                            </div>
                            <div className="input-container">
                                <label htmlFor="description">Descrição</label>
                                <Input style={{outlineColor: theme}} id='description' />
                            </div>
                            <div className="check-icon-container">
                                <DisabledByDefaultIcon onMouseEnter={() => setXIconColor(theme)}
                                    onMouseLeave={() => setXIconColor('white')}
                                    sx={{ color: xIconColor, fontSize: 70 }}
                                    onClick={onClickX}
                                />
                                <CheckBoxIcon onMouseEnter={() => setIconColor(theme)}
                                    onMouseLeave={() => setIconColor('white')}
                                    sx={{ color: iconColor, fontSize: 70 }}
                                />
                            </div>
                        </div>
                        <input style={{display: 'none'}} type="submit" value="" />
                    </Form> }
            </div> : null }
        </div>
    )
}