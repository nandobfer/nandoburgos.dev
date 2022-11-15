import { useState } from 'react';
import './style.scss';

export const HeaderButton = ({ children, onClick, color }) => {
    
    const [hovered, setHovered] = useState(false)

    return (
        <div className="HeaderButton-component" 
            style={hovered ? {backgroundColor: color, fontWeight: 'bold'} : null} 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            onClick={onClick} >
                {children}
        </div>
    )
}