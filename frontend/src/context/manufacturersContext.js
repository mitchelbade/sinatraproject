import { useState, createContext, useEffect } from 'react'
import { baseURL, headers } from '../Globals'
import { useNavigate } from 'react-router-dom';

const ManufacturersContext = createContext(null);

const ManufacturersProvider = ({ children }) => {
    const [manufacturers, setManufacturers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(baseURL + '/manufacturers')
        .then(r => r.json())
        .then(data => setManufacturers(data))
    }, [])

    const addManufacturer = manufacturer => {
        fetch(baseURL + '/manufacturers/new', {
            method: 'POST',
            headers,
            body: JSON.stringify(manufacturer)
        })
        .then(r => r.json())
        .then(data => {
            setManufacturers([...manufacturers, data])
            navigate('/manufacturers');
        })
        
    }

    return <ManufacturersContext.Provider value={{ manufacturers, addManufacturer }}>{ children }</ManufacturersContext.Provider>
}

export { ManufacturersContext, ManufacturersProvider }