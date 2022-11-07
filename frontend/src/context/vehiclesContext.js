import { useState, createContext, useEffect } from 'react'
import { baseURL, headers } from '../Globals'
import { useNavigate } from 'react-router-dom';

const VehiclesContext = createContext(null);

const VehiclesProvider = ({ children }) => {
    const [vehicle, setVehicle] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(baseURL + '/vehicles')
        .then(r => r.json())
        .then(data => setVehicle(data))
    }, [])

    const addVehicle = vehicle => {
        fetch(baseURL + '/vehicles/new', {
            method: 'POST',
            headers,
            body: JSON.stringify(vehicle)
        })
        .then(r => r.json())
        .then(data => {
            setVehicle([...vehicle, data])
            navigate('/vehicles');
        })
        
    }

    return <VehiclesContext.Provider value={{ vehicle, addVehicle }}>{ children }</VehiclesContext.Provider>
}

export { VehiclesContext, VehiclesProvider }