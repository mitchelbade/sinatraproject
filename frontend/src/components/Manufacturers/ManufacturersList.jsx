import React from 'react'
import { useContext } from 'react'
import ManufacturersCard from './ManufacturerCard'
import { ManufacturersContext } from '../../context/manufacturersContext'

const ManufacturersList = () => {
    const { manufacturers } = useContext(ManufacturersContext)

    const manufacturerCard = manufacturers.map(manufacturer => <ManufacturersCard key={
        manufacturer.id } manufacturer={ manufacturer } />)

    return (
        <div className='Card-wrapper'>
            { manufacturerCard }
        </div>
    )
}

export default ManufacturersList