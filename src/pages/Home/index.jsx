import { useEffect } from 'react';
import './style.scss';

export const Home = () => {

    useEffect(() => {
        document.title = 'NandoBurgos.dev - Início'
    }, [])
    
    return (
        <div className="Home-page">
            <div>
                <p>NANDOBURGOS.DEV</p>
            </div>
            {/* <hr /> */}
        </div>
    )
}