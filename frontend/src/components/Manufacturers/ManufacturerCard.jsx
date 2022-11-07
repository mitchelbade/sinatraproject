import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';



const ManufacturerCard = ({ manufacturer }) => {
    console.log(manufacturer)
    return (
        <Card variant="outlined">
            <CardContent>
                <h1>{ manufacturer.name }</h1>
                <p>Rank: { manufacturer.rank }</p>
                <p>Based in: { manufacturer.based_in }</p>
                <p>Number of vehicles: { manufacturer.vehicle_models.length }</p>
            </CardContent>
        </Card>
    )
}

export default ManufacturerCard