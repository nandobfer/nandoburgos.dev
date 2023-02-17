import { useEffect } from 'react';
import './style.scss';
import { ProgrammingIcons } from '../../components/ProgrammingIcons';

export const Home = () => {

    useEffect(() => {
        document.title = 'nandoburgos.dev - Home'
    }, [])
    
    return (
        <div className="Home-page">
            <div className='title-container'>
                <p>{'>'}nandoburgos.dev</p>
            </div>
            <ProgrammingIcons />
        </div>
    )
}