import './style.scss';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Form, Input } from 'react-burgos';
import { api } from '../../api';
import { useLogin } from '../../hooks/useLogin';
import { Dialog } from '@mui/material';

const CheatLine = ({ cheat, list, hovered }) => {
    const cheatRef = useRef(null)
    list.push(cheatRef)

    const style = {
        fontWeight: hovered ? 'bold' : null
    }
    
    return (
        <p ref={cheatRef} className="cheat-description" style={style} >{cheat}</p>
    )
}

const Cheat = ({ cheat, theme }) => {
    const [hovered, setHovered] = useState(false)
    const [copy, setCopy] = useState(false)
    const cheat_list = cheat.description.split('<br>')
    const cheatRefs = []

    const style = {
        backgroundColor: hovered ? theme : null,
        color: hovered ? 'black' : 'white',
    }

    const copy_style = {
        opacity: copy ? 1 : 0, 
        color: hovered ? 'black' : theme
    }

    const title_style = {
        fontWeight: hovered ? 'bold' : null
    }

    const onCheatClick = useCallback(() => {
        let text = ''
        for (const item of cheatRefs) {
            text += item.current.innerText
            text += '\n'
        }
        text = text.slice(0, -1)
        navigator.clipboard.writeText(text)
        setCopy(true)
        setHovered(false)
        setTimeout(() => setCopy(false), 1000)
    }, [cheatRefs])

    return (
        <div className="Cheat-component" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={style} onClick={onCheatClick}>
            <p className="cheat-title" style={title_style} >{cheat.title}<span style={copy_style}>COPIADO</span></p>
            {cheat_list.map(item => {
                return <CheatLine key={item} cheat={item} list={cheatRefs} hovered={hovered} />
            })}
            <hr style={{borderColor: theme}} />
        </div>
    )
}

export const LanguageSheet = ({ cheats, setCheats, language, theme }) => {
    const login = useLogin()
    const newCheatTitleRef = useRef(null)
    const modalInputRef = useRef(null)
    const [iconColor, setIconColor] = useState(theme)
    const [xIconColor, setXIconColor] = useState(theme)
    const [newModalCheat, setNewModalCheat] = useState({})
    const [newCheat, setNewCheat] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [loginFeedback, setLoginFeedback] = useState('')
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

    const saveNewCheat = (values) => {
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

    const onFormSubmit = (values) => {
        if (login.value) {
            saveNewCheat(values)
        } else {
            openModal(values)
        }
    }

    const tryLogin = (values) => {
        api.post('/login', {password: values.password})
        .then(response => {
            if (response.data.login) {
                login.setValue(true)
                setTimeout(() => login.setValue(false), 1000 * 10 * 60)
                saveNewCheat(newModalCheat)
                setShowModal(false)
            } else {
                setLoginFeedback('Password refused')
                setTimeout(() => setLoginFeedback(''), 2000)
            }
        })
        .catch(error => {
            console.error(error)
        }) 
    }

    const openModal = (new_cheat) => {
        setNewModalCheat(new_cheat)
        setShowModal(true)
    }

    const inputs = {
        title: '',
        description: '',
    }

    const modal_style = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }

    useEffect(() => {
        if (newCheat) {
            newCheatRef.current?.scrollIntoView({ behavior: "smooth" })
            newCheatTitleRef.current.focus()
        }
    }, [newCheat])

    useEffect(() => {
        setNewCheat(false)

    }, [language])

    useEffect(() => {
        if (showModal) {
            modalInputRef.current.focus()
        }
    }, [showModal])

    return (
        <div className="LanguageSheet-component" >
            <Dialog
                keepMounted
                open={showModal}
                onClose={() => setShowModal(false)}
                sx={modal_style}
                >
                
                <Form initialValues={{password: ''}} onSubmit={values => tryLogin(values)}>
                    <div className="password-modal">
                        <label htmlFor="password">PASSWORD</label>
                        <Input refs={modalInputRef} id='password' type='password' />
                        <p>{loginFeedback}</p>
                    </div>
                </Form>
            </Dialog>
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
                                <Input refs={newCheatTitleRef} style={{outlineColor: theme}} id='title' />
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