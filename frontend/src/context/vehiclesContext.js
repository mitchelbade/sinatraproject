import { useState, createContext, useEffect } from 'react'
import { baseURL, headers } from '../Globals'
import { useNavigate } from 'react-router-dom';

const VehiclesContext = createContext(null);

const VehiclesProvider = ({ children }) => {
    const [vehicles, setVehicles] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(baseURL + '/vehicles')
        .then(r => r.json())
        .then(data => setVehicles(data))
    }, [])

    const addVehicle = vehicle => {
        fetch(baseURL + '/vehicles/new', {
            method: 'POST',
            headers,
            body: JSON.stringify(vehicle)
        })
        .then(r => r.json())
        .then(data => {
            setVehicles([...vehicles, data])
            navigate('/vehicles');
        })
    }

    const getVehicleById = (id) => {
        return vehicles.find((vehicle) => vehicle.id === vehicle.id)
    }

    const editVehicle = vehicle => {
        fetch(baseURL + `/vehicles/${vehicle.id}`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify(vehicle)
        })
        .then(r => r.json())
        .then(data => {
            setVehicles((prevState) => {
                const edit = prevState.find((prevVehicle) => parseInt(vehicle.id) === prevVehicle.id)
                const i = prevState.indexOf(edit)
                prevState[i] = data
                return [...prevState]
            })
        })
    }

    return <VehiclesContext.Provider value={{ vehicles, addVehicle, getVehicleById, editVehicle }}>{ children }</VehiclesContext.Provider>
}

export { VehiclesContext, VehiclesProvider }