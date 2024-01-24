import React from 'react'
import './BorderCountry.css'
import { useNavigate } from 'react-router-dom';


export const BorderCountry = ({ nighbors }) => {

    const navigate = useNavigate();

    return (
        <div className='BorderCountry__wrapper'>
            {!Array.isArray(nighbors) || !nighbors.length ? (
                <span>no Border</span>
            ) : (
                <div className='BorderCountry__block'>Borders Countries
                    {nighbors.map((b) => (
                        <span className='BorderCountry__span' key={b} onClick={() => navigate(`/${b}`)}>{b}</span>
                    ))}
                </div>
            )}
        </div>
    );
};

