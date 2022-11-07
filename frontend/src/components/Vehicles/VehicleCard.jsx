import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';



const VehicleCard = ({ vehicle }) => {
    return (
        <Link to={`/vehicles/${vehicle.id}`}>
        <Card variant="outlined" className='card'>
            <CardContent>
                <h1>{ vehicle.name }</h1>
                <p>Manufacture: { vehicle.manufacturer?.name }</p>
                <p>Year made: { vehicle.years_made }</p>
                <p>Body type: { vehicle.body_type }</p>
                <p>Description: { vehicle.description }</p>
            </CardContent>
        </Card>
        </Link>
    )
}

export default VehicleCard