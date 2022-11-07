import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useHandleChange } from '../../hooks';
import Button from '@mui/material/Button';
import { ManufacturersContext } from '../../context/manufacturersContext';

const ManufacturersForm = () => {
    const [name, handleChangeName] = useHandleChange('');
    const [based_in, handleChangeBasedIn] = useHandleChange('');
    const [rank, handleChangeRank] = useHandleChange(0);

    const { addManufacturer } = useContext(ManufacturersContext)

    const handleSubmit = e => {
        e.preventDefault();
        addManufacturer({ name, based_in, rank })
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
            <h3>Add Manufacturer</h3>
            <TextField id="name" label="Name" variant="outlined" value={name} onChange={handleChangeName} />
            <TextField id="based_in" label="Based in" variant="outlined" value={based_in} onChange={handleChangeBasedIn} />
            <TextField type='number' id="rank" label="Rank" variant="outlined" value={rank} onChange={handleChangeRank} />
            <Button type='submit' variant="contained">Add Manufacturer</Button>
        </Box>
    )
}

export default ManufacturersForm