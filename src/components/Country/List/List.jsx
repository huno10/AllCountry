import React from 'react'
import './list.css'
import { Card } from './Card/Card';
import { Link } from 'react-router-dom';

export const List = ({ filterCountry, navigate }) => {
    return (
        <section className='wrapper__list'>
            {filterCountry.map((c) => {

                const countryInfo = {
                    img: c.flags.png,
                    name: c.name.common,
                    info: [
                        {
                            title: 'Population',
                            description: c.population
                        },
                        {
                            title: 'Region',
                            description: c.region
                        },
                        {
                            title: 'Capital',
                            description: c.capital
                        },
                    ],
                };

                return (
                    <Link to={`/${c.name.common}`} key={c.name.common}>
                        <Card {...countryInfo} onClick={() => navigate('/')} />
                    </Link>
                )
            })}
        </section>
    );
};

