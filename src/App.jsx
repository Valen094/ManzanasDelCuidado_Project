import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home/Home'
import { InicioSesion } from './Components/InicioSesion/InicioSesion'
import { Registro } from './Components/Registro/Registro'
import { Mapa } from './Components/Mapa/Mapa'
import { MapaCard } from './Components/Mapa/MapaCard'
// import { Municipios } from './Components/Municipios/Municipios'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/iniciarsesion' element={<InicioSesion/>}></Route>
      <Route path='/registro' element={<Registro/>}></Route>
      <Route path='/mapa' element={<Mapa/>}></Route>
      <Route path='/cardmapa' element={<MapaCard/>}></Route>
    </Routes>


          
    </>
  )
}

export default App
