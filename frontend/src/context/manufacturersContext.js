import { useState, createContext, useEffect } from 'react'
import { baseURL } from '../Globals'

const ManufacturersContext = createContext(null);

const ManufacturersProvider = ({ children }) => {
    const [manufacturers, setManufacturers] = useState([]);

    useEffect(() => {
        fetch(baseURL + '/manufacturers')
        .then(r => r.json())
        .then(data => setManufacturers(data))
    }, [])

    return <ManufacturersContext.Provider value={{ manufacturers, setManufacturers }}>{ children }</ManufacturersContext.Provider>
}

export { ManufacturersContext, ManufacturersProvider }