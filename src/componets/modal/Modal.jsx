import './modal.css';

export const Modal = ({ mostrarModal, cerrarModal, onAceptar  }) => {

  

  if (!mostrarModal) {
    return null; // No renderizar el modal si mostrarModal es false
  }

  // const retiroEquipo = ()=>{
  //   setAccionModal('retiro');
  //   setIdEquipo(item._id); // Aquí deberías establecer el ID del equipo que se va a retirar
  // }

  return (
    <div className='container-modal'>
      <div className="contenido-modal">
        <button className='closed-modal' onClick={cerrarModal}>x</button>
        <p>¿Esta segiro de realizar esa acción?</p>
        <div className='botones-modal'>
          <button className='boton-aceptar' onClick={onAceptar}>aceptar</button>
          <button className='boton-cancelar' onClick={cerrarModal}>Cancelar</button>
        </div>

      </div>
    </div>
  )
}
