import React from 'react'
import './BlockInfo.css'
import { BorderCountry } from '../BorderCountry/BorderCountry';

export const BlockInfo = ({ props, nighbors }) => {
    const {
        name,
        population,
        continents,
        subregion,
        capital,
        maps,
        currencies,
        languages,
        
    } = props;
    
    return (
        <div>
            <h1 className='BlockInfo__title'>{name.common}</h1>
            <div className='BlockInfo__block'>
                <ul className='BlockInfo__list'>
                    <li className='BlockInfo__item'>Official name:
                        {Object.keys(name.nativeName).map((code) => (
                            <span className='BlockInfo__span' key={code}> {name.nativeName[code].common}</span>
                        ))}
                    </li>
                    <li className='BlockInfo__item'>Population:
                        <span className='BlockInfo__span'> {population}</span>
                    </li>
                    <li className='BlockInfo__item'>Continents:
                        <span className='BlockInfo__span'> {continents}</span>
                    </li>
                    <li className='BlockInfo__item'>Subregion:
                        <span className='BlockInfo__span'> {subregion}</span>
                    </li>
                    <li className='BlockInfo__item'>Capital:
                        <span className='BlockInfo__span'> {capital}</span>
                    </li>
                </ul>
                <ul className='BlockInfo__list'>

                    <li className='BlockInfo__item'>Currencies:
                        {Object.keys(currencies).map((currencyCode) => (
                            <span key={currencyCode} className='BlockInfo__span'> {currencyCode}, {currencies[currencyCode].name}</span>
                        ))}
                    </li>

                    <li className='BlockInfo__item'>Languages:
                        {Object.keys(languages).map((code) => (
                            <span key={code} className='BlockInfo__span'> {languages[code]}</span>
                        ))}
                    </li>

                    <li className='BlockInfo__item'> GoogleMaps:
                        <a className='BlockInfo__span'> {maps.googleMaps}</a>
                    </li>
                </ul>
            </div>
            <BorderCountry nighbors={nighbors} />
        </div>
    )
}
