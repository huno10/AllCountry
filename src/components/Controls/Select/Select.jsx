import React from 'react';
import Selected from 'react-select';
import './select.css';


const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
]

export const Select = ({ region, setRegion }) => {
  return (
    <div className='wrapper__select'>
      <Selected options={options} placeholder='Континент' isClearable isSearchable={false}
        onChange={setRegion} value={region}
      />
    </div>
  )
}
