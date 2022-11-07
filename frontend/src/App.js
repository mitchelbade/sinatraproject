import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import NavBar from './components/Navigation/NavBar'
import ModelsList from './components/VehicleModels/ModelsList'
import ModelsEdit from './components/VehicleModels/ModelsEdit'
import ModelsForm from './components/VehicleModels/ModelsForm'
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
        <Route exact path='/models' element={<ModelsList />} />
        <Route path='/models/new' element={<ModelsForm />} />
        <Route path='/models/:id/edit' element={<ModelsEdit />} />
      </Routes>
    </Router>
  );
}

export default App;