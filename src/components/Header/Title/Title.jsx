import React from 'react';
import { useNavigate } from 'react-router-dom';
import './title.css';

export function Title() {
    const navigate = useNavigate();

    const handleTitleClick = (event) => {
        event.preventDefault();  
        navigate('/'); 
    };

    return (
        <a href='/' className="title" onClick={handleTitleClick}>
            Все страны мира!
        </a>
    );
}
