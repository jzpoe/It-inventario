import { useEffect, useState } from 'react'
import './cambio.css'
import Input from '../input/Input'
import { InputCambios } from './InputCambios'

export const Cambio = () => {
  const [cambios, setCambios] = useState([])
  const [loading, setLoading] = useState(true)
  const[findBusqueda, setFindBusqueda]=useState('')

  useEffect(() => {

    fetch('https://it-inventario-backend-d0w89i05t-jzpoes-projects.vercel.app/inventario/cambio')
      .then(res => res.json())
      .then(data => {
        console.log("Datos recibidos del backend:", data);
        // Aquí puedes manejar los datos recibidos
        setCambios(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error en fetch:", err);
        // Manejo de errores
        setLoading(false);

      });

    
  }, [])
if (loading) {
      return <p>Cargando cambios...</p>
    }

    const encontrarItem = cambios.filter(item=>
    (item.serial|| '').toLowerCase().includes(findBusqueda.toLowerCase()) ||
        (item.personaasignada || '').toLowerCase().includes(findBusqueda.toLowerCase()) ||
        (item.marca || '').toLowerCase().includes(findBusqueda.toLowerCase())||
        (item.activofijo || '').toLowerCase().includes(findBusqueda.toLowerCase())

        )



  return (
    <div className='inventario-cambio'>
      <InputCambios findBusqueda={findBusqueda} setFindBusqueda= {setFindBusqueda}/>
      
      <h2>Equipos Cambios</h2>
      <div className='cambios'>
        {
          encontrarItem.map(item => (
            <div key={item._id} className="card-cambio-container">
              <p><strong>ID:</strong> {item._id}</p>
              <p><strong>Serial:</strong> {item.serial}</p>
              <p><strong>Activo Fijo:</strong> {item.activofijo}</p>
              <p><strong>Estado:</strong> {item.estado}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
