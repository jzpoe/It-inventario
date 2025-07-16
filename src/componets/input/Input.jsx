import './input.css'

const Input = ({findRetiros, setFindRetiros, setCurrentPage}) => {


   const handleBusqueda =(e)=>{
    setFindRetiros(e.target.value)

   }

  return (
    <div className='container-input'>   
        <div className='clase-input'>
            <input type="text"
            placeholder='Buscar por serial, persona o marca'
             value={findRetiros}
            onChange={ handleBusqueda }
           
            />
        </div>
    </div>
  )
}

export default Input