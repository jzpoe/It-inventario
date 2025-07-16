
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Inventario } from './componets/Inventario/Inventario'
import { Navbar } from './componets/navbar/Navbar'
import { Enviado } from './componets/enviados/Enviado'
import { Retiro } from './componets/retiro/Retiro'
import { Cambio } from './componets/cambios/Cambio'
import { Modal } from './componets/modal/Modal'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
     <Route path="/" element={<Inventario/>}/>
   <Route path='/enviado' element={<Enviado/>} />
   <Route path='/retiro' element={<Retiro/>} />
   <Route path='/inventario/cambio' element={<Cambio/>} />
      <Route path='/inventario/retiro' element={<Retiro/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
