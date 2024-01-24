import React from 'react'
import './card.css'

export const Card = ({ img, name, info = [], onClick }) => {
    return (
        <article className='wrapper__card' onClick={onClick}>
            <img className='card__img' src={img} alt={name} />
            <div className='card__wrapper'>
                <h3 className='card__title'>
                    {name}
                </h3>
                <ul className='card__list'>
                    {info.map((el) => (
                        <li className='card__item' key={el.title}>
                            <span className='item__title'>{el.title}:</span>
                            <span>{el.description}</span>
                             
                        </li>
                    ))}
                </ul>
            </div>

        </article>
    )
}
