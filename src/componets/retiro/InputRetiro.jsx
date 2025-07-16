import React from 'react'

export const InputRetiro = ({findRetiros, setFindRetiros}) => {


const handleBusquedaRetiro =(e)=>{
    setFindRetiros(e.target.value);
}

  return (
    <div className='container-input'>
        <div className='clase-input'>
            <input type="text"
            placeholder='Buscar por serial, persona o marca'
             value={findRetiros}
            onChange={ handleBusquedaRetiro }
           
            />
        </div>
    </div>
  )
}
