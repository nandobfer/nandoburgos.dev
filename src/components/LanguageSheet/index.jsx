import './style.scss';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { useState } from 'react';
import { Form, Input } from 'react-burgos';
import { api } from '../../api';

const Cheat = ({ cheat, theme }) => {

    return (
        <div className="Cheat-component">
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

    const style = {
        color: 'white'
    }

    const onClickNewCheat = () => {
        setNewCheat(true)
    }

    const onClickX = () => {
        setNewCheat(false)
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

    return (
        <div className="LanguageSheet-component" style={style}>
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
                        <div className="input-wrapper">
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