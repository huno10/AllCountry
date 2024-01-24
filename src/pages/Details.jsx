import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import { searchByCountry } from '../config'
import './details.css'
import { InfoCauntry } from '../components/infoCountry/InfoCauntry';


export const Details = () => {
    const [country, setCountry] = useState(null)
    const { name } = useParams();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]))
    }, [name])

    return (
        <div>
            <button className='btn__back' onClick={handleGoBack}>
                <IoArrowBack /> Back
            </button>
            {country && (
                <InfoCauntry {...country} />
            )}
        </div>
    );
};
