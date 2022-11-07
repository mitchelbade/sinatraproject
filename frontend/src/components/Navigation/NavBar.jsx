import React from 'react'
import { NavLink, useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';

const NavBar = () => {
    const activeStyle = { color: 'blue' }
    const defaultStyle = { color: 'gray' }
    const location = useLocation();
    console.log(location.pathname)
    return (
        <Box sx={{ boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)' }}>
            <BottomNavigation>
                <NavLink 
                    to='/' 
                    style={({ isActive }) =>
                        isActive ? activeStyle : defaultStyle
                    }
                >
                    <BottomNavigationAction label="Home" style={{ color: 'currentcolor' }} icon={<HomeOutlinedIcon style={{ color: 'currentcolor' }} />} />
                </NavLink>

                <NavLink 
                    to='/manufacturers' 
                    style={({ isActive }) =>
                        isActive && location.pathname === '/manufacturers' ? activeStyle : defaultStyle
                    }
                >
                    <BottomNavigationAction label="Manufacturers" style={{ color: 'currentcolor' }} icon={<BuildOutlinedIcon style={{ color: 'currentcolor' }} />} />
                </NavLink>
                <NavLink 
                    to='/manufacturers/new'
                    style={({ isActive }) =>
                        isActive ? activeStyle : defaultStyle
                    }
                >
                    <BottomNavigationAction label="Add Manufacturer" style={{ color: 'currentcolor' }} icon={<AddBoxOutlinedIcon style={{ color: 'currentcolor' }}/>} />
                </NavLink>
                <NavLink 
                    to='/models'
                    style={({ isActive }) =>
                        isActive && location.pathname === '/models' ? activeStyle : defaultStyle
                    }
                >
                    <BottomNavigationAction label="Vehicles" style={{ color: 'currentcolor' }} icon={<DirectionsCarOutlinedIcon style={{ color: 'currentcolor' }} />} />
                </NavLink>
                <NavLink 
                    to='/models/new'
                    style={({ isActive }) =>
                        isActive ? activeStyle : defaultStyle
                    }
                >
                    <BottomNavigationAction label="Add Vehicles" style={{ color: 'currentcolor' }} icon={<AddBoxOutlinedIcon style={{ color: 'currentcolor' }} />} />
                </NavLink>
            </BottomNavigation>
        </Box>
    )
}

export default NavBar