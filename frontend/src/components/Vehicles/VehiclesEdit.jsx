import React from 'react'
import { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { VehiclesContext } from '../../context/vehiclesContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useHandleChange } from '../../hooks';
import Button from '@mui/material/Button';

const VehicleEdit = () => {
    const [changeDescription, setChangeDescription] = useHandleChange('');

    const { id } = useParams();

    const { editVehicle, getVehicleById } = useContext(VehiclesContext);

    const navigate = useNavigate();

    useEffect(() => {
        const vehicle = getVehicleById(id)
        setChangeDescription({ target: { value: vehicle.description } })
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        editVehicle({id, description: changeDescription})
        navigate('/vehicles')
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={ handleSubmit }
        >
            <h3>Edit Description</h3>
            <TextField id="description" label='Description' variant="outlined" value={changeDescription} onChange={setChangeDescription} />
            <Button type='submit' variant='contained'>Submit</Button>
        </Box>
    )
}

export default VehicleEdit