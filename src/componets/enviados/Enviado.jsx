import { useEffect, useState } from 'react';
import './enviado.css';

export const Enviado = () => {
  const [envioDatos, setEnvioDatos] = useState({
    serial: '',
    activofijo: '',
    activocargador: '', 
    personaasignada: '',
    actaentrega: '',
    fechaRecibido: '',
    ciudad: '',
    marca: '',
    modelo: '',
    procesador: '',
    memoria: '',
    discoduro: ''
  });
  const [loading, setLoading] = useState(true);
console.log(envioDatos);

  const handleChange = (e) => {

    const { name, value } = e.target;
    setEnvioDatos({
      ...envioDatos,
      [name]: value
    })

  }

  

    const handleSubmit = async () => {
      try {
        fetch('https://it-inventario-backend-d0w89i05t-jzpoes-projects.vercel.app/enviar', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(envioDatos)
        })
      } catch (error) {
        console.error('Error al enviar los datos:', error);
      }
    }



  



  return (
    <div className='inventario-envio'>
      <form className='content-inventario' onSubmit={handleSubmit}>
        <div className="form-grid">

          <div className='form-row'>
            <label htmlFor="">Serial</label>
            <input type="text" placeholder='Serial' name='serial' value={envioDatos.serial} onChange={handleChange} />
          </div>
          
          <div className='form-row'>
            <label htmlFor="">Activo Fijo</label>
            <input type="text" placeholder='Activo Fijo' name='activofijo' value={envioDatos.activofijo} onChange={handleChange} />
          </div>

          <div className='form-row'>
            <label htmlFor="">Activo Cargador</label>
            <input type="text" placeholder='Activo Cargador' name='activocargador' value={envioDatos.activocargador} onChange={handleChange} />
          </div>



          

          <div className='form-row'>
            <label htmlFor="">Persona Asignada</label>
            <input type="text" placeholder='Persona Asignada' name='personaasignada' value={envioDatos.personaasignada} onChange={handleChange} />
          </div>

          <div className='form-row'>
            <label htmlFor="">Acta de Entrega</label>
            <input type="text" placeholder='Acta de entrega' name='actaentrega' value={envioDatos.actaentrega} onChange={handleChange} />
          </div>
          <div className='form-row'>
            <label htmlFor="">Ciudad</label>
            <input type="text" placeholder='Ciudad' name='ciudad' value={envioDatos.ciudad} onChange={handleChange} />
          </div>
          <div className='form-row'>
            <label htmlFor="">Marca</label>
            <input type="text" placeholder='Marca' name='marca' value={envioDatos.marca} onChange={handleChange} />
          </div>
          <div className='form-row'>
            <label htmlFor="">Modelo</label>
            <input type="text" placeholder='Modelo' name='modelo' value={envioDatos.modelo} onChange={handleChange} />
          </div>
          <div className='form-row'>
            <label htmlFor="">Procesador</label>
            <input type="text" placeholder='Procesador' name='procesador' value={envioDatos.procesador} onChange={handleChange} />
          </div>
          <div className='form-row'>
            <label htmlFor="">Ram</label>
            <input type="text" placeholder='memoria' name='memoria' value={envioDatos.memoria} onChange={handleChange} />
          </div>
          <div className='form-row'>
            <label htmlFor="">Disco Duro</label>
            <input type="text" placeholder='Disco Duro' name='discoduro' value={envioDatos.discoduro} onChange={handleChange} />
          </div>
          <div className='form-row'>
            <label htmlFor="">Fecha Recibido</label>
            <input type="date" placeholder='Fecha Recibido' name='fechaRecibido' value={envioDatos.fechaRecibido} onChange={handleChange} />
          </div>
          
          

        </div>
{/*  el estillo ccs del boton vien del css de pagination   */}
          <button className="boton-paginacion" type='submit'> enviar</button> 
      </form>
    </div>
  )
}
