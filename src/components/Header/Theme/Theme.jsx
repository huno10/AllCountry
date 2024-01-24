import { useEffect, useState } from "react";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import './theme.css'



export function Theme() {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])



    return (
        <div className="theme" onClick={toggleTheme}>
            {theme === 'light' ? <IoMoonOutline size='14px' /> : <IoMoon size='14px' />}
            <span className="theme__span">{theme === 'light' ? 'Темная': 'Светлая'} тема</span>



        </div>
    )
}