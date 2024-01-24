import React, { useEffect, useState } from 'react'
import './infoCauntry.css'
import { BorderCountry } from './BorderCountry/BorderCountry';
import { BlockInfo } from './BlockInfo/BlockInfo';
import axios from 'axios'
import { filterByCode } from '../../config';





export const InfoCauntry = (props) => {
    const {
        name,
        flags,
        borders
    } = props;

    const [nighbors, setNighbors] = useState()

    useEffect(() => {

        axios.get(filterByCode(borders)).then(({ data }) =>
            setNighbors(data.map(c => c.name.common)))

    }, [borders]);

    return (
        <div className='infoCauntry__wrapper'>
            <img className='infoCountry__img' src={flags.png} alt={name.common} />

            <BlockInfo props={props} nighbors={nighbors} />

        </div>
    )
}
