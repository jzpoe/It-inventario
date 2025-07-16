
export const InputCambios = ({findBusqueda, setFindBusqueda}) => {

const handleBusqueda=(e)=>{
setFindBusqueda(e.target.value)
}
  return (
    <div className='container-input'>   
        <div className='clase-input'>
            <input type="text"
            placeholder='Buscar por serial, persona o marca'
             value={findBusqueda}
            onChange={ handleBusqueda }
           
            />
        </div>
    </div>
  )
}
