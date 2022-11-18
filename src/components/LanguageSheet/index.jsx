import './style.scss';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Form, Input } from 'react-burgos';
import { api } from '../../api';
import { useLogin } from '../../hooks/useLogin';
import { Dialog } from '@mui/material';
import { TextArea } from '../TextArea';

const modal_style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}

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

const Cheat = ({ cheat, theme, language }) => {
    const login = useLogin()

    const [hovered, setHovered] = useState(false)
    const [copy, setCopy] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const [iconColor, setIconColor] = useState('black')
    const [showModal, setShowModal] = useState(false)
    const [loginFeedback, setLoginFeedback] = useState('')

    const cheat_list = cheat.description.split('<br>')
    const modalInputRef = useRef(null)
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

    const onClickDeleteCheat = useCallback(() => {
        if (login.value) {
            deleteCheat()
        } else {
            setShowModal(true)
        }
    }, [])

    const deleteCheat = useCallback(() => {
        api.post('/delete_cheat', {language: language.toLowerCase(), cheat: cheat})
        .then(response => {
            if (response.data.success) {
                setDeleted(true)
            }
        })
        .catch(error => {
            alert(error)
        })
    }, [])

    const tryLogin = (values) => {
        api.post('/login', {password: values.password})
        .then(response => {
            if (response.data.login) {
                login.setValue(true)
                setTimeout(() => login.setValue(false), 1000 * 10 * 60)
                deleteCheat()
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

    useEffect(() => {
        if (showModal) {
            modalInputRef.current.focus()
        }
    }, [showModal])

    return (
        <div className={`Cheat-component ${deleted ? 'deleted' : null}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={style} onClick={onCheatClick}>
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
            <div>
                <p className="cheat-title" style={title_style} >{cheat.title}<span style={copy_style}>COPIADO</span></p>
                {cheat_list.map(item => {
                    return <CheatLine key={item} cheat={item} list={cheatRefs} hovered={hovered} />
                })}
                <hr style={{borderColor: theme}} />
            </div>
            {
                hovered ? <RemoveCircleIcon className='remove-icon'
                    onMouseEnter={() => setIconColor('white')}
                    onMouseLeave={() => setIconColor('black')}
                    sx={{ color: iconColor, fontSize: 70 }}
                    onClick={onClickDeleteCheat}
                /> : null
            }
        </div>
    )
}

export const LanguageSheet = ({ cheats, setCheats, language, theme }) => {

    const login = useLogin()

    const newCheatRef = useRef(null)
    const newCheatTitleRef = useRef(null)
    const formRef = useRef(null)
    const modalInputRef = useRef(null)

    const [iconColor, setIconColor] = useState(theme)
    const [xIconColor, setXIconColor] = useState(theme)
    const [newModalCheat, setNewModalCheat] = useState({})
    const [newCheat, setNewCheat] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [loginFeedback, setLoginFeedback] = useState('')

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

    const submitForm = () => {
        console.log(formRef)
        formRef.current.submit()
    }

    // prevenir o reload após clicar no botãozinho
    const onSubmitHandler = (event) => {
        event.preventDefault()
        alert('a')
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
                    <Cheat key={item.id} cheat={item} theme={theme} language={language} />
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
                    <Form onSubmitHandler={onSubmitHandler} refs={formRef} initialValues={inputs} onSubmit={values => onFormSubmit(values)}>
                        <div className="input-wrapper" ref={newCheatRef}>
                            <div className="input-container">
                                <label htmlFor="title">Título</label>
                                <Input refs={newCheatTitleRef} style={{outlineColor: theme}} id='title' />
                            </div>
                            <div className="input-container">
                                <label htmlFor="description">Descrição</label>
                                <Input style={{outlineColor: theme}} id='description' />
                                {/* <TextArea style={{outlineColor: theme}} id='description' /> */}
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
                                    onClick={submitForm}
                                />
                            </div>
                        </div>
                        <input style={{display: 'none'}} type="submit" value="" />
                    </Form> }
            </div> : null }
        </div>
    )
}