import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import NavBar from './components/Navigation/NavBar'
import VehiclesList from './components/Vehicles/VehiclesList'
import VehiclesEdit from './components/Vehicles/VehiclesEdit'
import VehiclesForm from './components/Vehicles/VehiclesForm'
import ManufacturersList from './components/Manufacturers/ManufacturersList'
import ManufacturersForm from './components/Manufacturers/ManufacturersForm'
import { ManufacturersProvider } from './context/manufacturersContext'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      <ManufacturersProvider>
        <Routes>
          <Route exact path='/manufacturers' element={<ManufacturersList />} />
          <Route path='/manufacturers/new' element={<ManufacturersForm />} />
        </Routes>
      </ManufacturersProvider>

      <Routes>
        <Route exact path='/vehicles' element={<VehiclesList />} />
        <Route path='/vehicles/new' element={<VehiclesForm />} />
        <Route path='/vehicles/:id/edit' element={<VehiclesEdit />} />
      </Routes>
    </Router>
  );
}

export default App;