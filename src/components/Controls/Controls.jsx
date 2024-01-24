import React, { useEffect, useState } from 'react'
import { Search } from './Search/Search'
import { Select } from './Select/Select'
import './controls.css'


export const Controls = ({ onSearch }) => {
    const [search, setSearch] = useState('')
    const [region, setRegion] = useState('')

    useEffect(() => {
        const regionValue = region?.value || '';
        onSearch(search, regionValue);
    }, [search, region])



    return (
        <div className='controls'>
            <Search search={search} setSearch={setSearch} />
            <Select region={region} setRegion={setRegion} />
        </div>
    )
}
