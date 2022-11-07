import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useHandleChange } from '../../hooks';
import Button from '@mui/material/Button';
import { VehiclesContext } from '../../context/vehiclesContext';

const VehiclesForm = () => {
    const [name, handleChangeName] = useHandleChange('');
    const [body_type, handleChangeBodyType] = useHandleChange('');
    const [years_made, handleChangeYearsMade] = useHandleChange(0);
    const [description, handleChangeDescription] = useHandleChange('')
    const [manufactureName, handleChangeManufactureName] = useHandleChange('')

    const { addVehicle } = useContext(VehiclesContext)

    const handleSubmit = e => {
        e.preventDefault();
        addVehicle({ name, body_type, years_made, description, manufacture_name: manufactureName })
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
            <h3>Add Vehicle</h3>
            <TextField id="name" label="Name" variant="outlined" value={name} onChange={handleChangeName} />
            <TextField id="body_type" label="Body type" variant="outlined" value={body_type} onChange={handleChangeBodyType} />
            <TextField type='number' id="years_made" label="Year made" variant="outlined" value={years_made} onChange={handleChangeYearsMade} />
            <TextField id="manufactureName" label="Manufacture" variant="outlined" value={manufactureName} onChange={handleChangeManufactureName} />
            <TextField id="description" label="Description" variant="outlined" value={description} onChange={handleChangeDescription} />
            <Button type='submit' variant="contained">Add Vehicle</Button>
        </Box>
    )
}

export default VehiclesForm