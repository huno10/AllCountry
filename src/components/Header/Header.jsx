import react from 'react'
import './header.css'
import { Title } from './Title/Title'
import { Theme } from './Theme/Theme'

export function Header() {
    return (
        <header className='header'>
            <div className='wrapper'>
                <Title />
                <Theme />
            </div>
        </header >
    )
}