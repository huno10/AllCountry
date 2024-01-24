import React from 'react'
import { IoSearch } from "react-icons/io5";
import './search.css'



export const Search = ({ search, setSearch }) => {
    return (
        <div className='search'>
            <IoSearch />
            <input className='input' type="search" placeholder='Найди свою старну...'
                onChange={(e) => setSearch(e.target.value)} value={search}
            />
        </div>
    )
}
