import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { List } from '../components/Country/List/List';
import { Controls } from '../components/Controls/Controls';
import { ALL_COUNTRIES } from '../config'

export const HomePage = ({ countries, setCountries }) => {
    const [filterCountry, setFilterCountry] = useState(countries)


    const navigate = useNavigate();

    const handleSearch = (search, region) => {
        let data = [...countries];
        if (region) {

            data = data.filter(c => c.region.includes(region))
        }
        if (search) {

            data = data.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))
        }
        setFilterCountry(data)
    }



    useEffect(() => {
        // Обновляем filterCountry при изменении countries
        setFilterCountry(countries);
    }, [countries]);

    useEffect(() => {
        // Загружаем данные, если countries пустой
        if (!countries.length) {
            axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
        }
    }, [countries, setCountries]);

    return (
        <>
            <Controls onSearch={handleSearch} />
            <List filterCountry={filterCountry} navigate={navigate} />
        </>
    );
};


