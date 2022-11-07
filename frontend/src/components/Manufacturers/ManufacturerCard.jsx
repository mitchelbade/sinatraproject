import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



const ManufacturerCard = ({ manufacturer }) => {
    console.log(manufacturer)
    return (
        <Card variant="outlined" className='card'>
            <CardContent>
                <h1>{ manufacturer.name }</h1>
                <p>Rank: { manufacturer.rank }</p>
                <p>Based in: { manufacturer.based_in }</p>
                <p>Number of vehicles: { manufacturer.vehicle_models?.length }</p>
            </CardContent>
        </Card>
    )
}

export default ManufacturerCard