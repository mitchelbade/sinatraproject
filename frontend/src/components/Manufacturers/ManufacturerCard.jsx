import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { ManufacturersContext } from '../../context/manufacturersContext';



const ManufacturerCard = ({ manufacturer }) => {

    const { deleteManufacturer } = useContext(ManufacturersContext)

    const handleDeleteManufacturer = () => {
        deleteManufacturer(manufacturer.id)
    }
    return (
        <Card variant="outlined" className='card'>
            <CardContent>
                <h1>{ manufacturer.name }</h1>
                <p>Rank: { manufacturer.rank }</p>
                <p>Based in: { manufacturer.based_in }</p>
                <p>Number of vehicles: { manufacturer.vehicles?.length }</p>
                <Button variant='outlined' onClick={handleDeleteManufacturer} >X</Button>
            </CardContent>
        </Card>
    )
}

export default ManufacturerCard