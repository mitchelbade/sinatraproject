import React, { useContext } from 'react'
import VehiclesCard from './VehicleCard'
import { VehiclesContext } from '../../context/vehiclesContext'

const VehiclesList = () => {
    const { vehicles } = useContext(VehiclesContext)

    const vehicleCard = vehicles.map(vehicle => <VehiclesCard key={
        vehicle.id } vehicle={ vehicle } />)

    return (
        <div className='Card-wrapper'>
            { vehicleCard }
        </div>
    )
}

export default VehiclesList