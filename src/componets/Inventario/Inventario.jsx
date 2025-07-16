import { useEffect, useState } from 'react';
import './inventario.css';
import { Modal } from '../modal/Modal';
import { Pagination } from '../pagination/Pagination';
import Input from '../input/Input';

export const Inventario = () => {
    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [accionModal, setAccionModal] = useState(null);
    const [idEquipo, setIdEquipo] = useState(null);
    const [busqueda, setBusqueda]= useState('')


    useEffect(() => {
        fetch('https://it-inventario-backend.vercel.app/obtener')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setDatos(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
                setLoading(false);
            });



    }, []);

    const retiro = async (id) => {

        

        try {
            const response = await fetch(`https://it-inventario-backend-d0w89i05t-jzpoes-projects.vercel.app/retiro/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }

            await response.json();

            // Quitar del estado local
            setDatos(prevDatos => prevDatos.filter(item => item._id !== id));


        } catch (error) {
            console.error('Error al retirar:', error);
        }
    }
    if (loading) {
        return <div>Loading...</div>;
    }

    const cambio = async (id) => {
        try {
            const response = await fetch(`https://it-inventario-backend-d0w89i05t-jzpoes-projects.vercel.app/inventario/cambio/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }

            await response.json();

            setDatos(prevDatos => prevDatos.filter(item => item._id !== id));

        } catch (error) {
            console.error('Error al cambiar estado:', error);
        }
    };
    // filtrado de datos en el input
    const datosFiltrados = datos.filter(item =>
  (item.serial || '').toLowerCase().includes(busqueda.toLowerCase()) ||
  (item.personaasignada || '').toLowerCase().includes(busqueda.toLowerCase()) ||
  (item.marca || '').toLowerCase().includes(busqueda.toLowerCase())
);

    // Lógica de paginación aquí

    const itemsPerPage = 10; // Número de elementos por página
    const ultimaPagina = currentPage * itemsPerPage; // Último elemento de la página actual 
    const primerPagina = ultimaPagina - itemsPerPage; // Primer elemento de la página actual
    const currentItems = datosFiltrados.slice(primerPagina, ultimaPagina);




    return (
        <>
        <Input busqueda={busqueda} setBusqueda={setBusqueda}  setCurrentPage={setCurrentPage} />
            <div className="inventario-wrapper">
                <div className="inventario">
                    {currentItems.map((item) => (
                        <div key={item._id} className="card-inventario-container">
                            <>
                                <p><strong>ID:</strong> {item._id}</p>

                                <p><strong>Serial:</strong> {item.serial}</p>
                                <p><strong>Activo Fijo:</strong> {item.activofijo}</p>
                                <p><strong>Activo Cargador:</strong> {item.activocargador}</p>
                                <p><strong>Persona Asignada:</strong> {item.personaasignada}</p>
                                <p><strong>Ciudad:</strong> {item.ciudad}</p>
                                <p><strong>Marca:</strong> {item.marca}</p>
                                <p><strong>Modelo:</strong> {item.modelo}</p>
                                <p><strong>Procesador:</strong> {item.procesador}</p>
                                <p><strong>RAM:</strong> {item.ram}</p>
                                <p><strong>Memoria:</strong> {item.memoria}</p>
                                <p><strong>Disco Duro:</strong> {item.discoduro}</p>
                                <p><strong>Estado:</strong> {item.estado}</p>
                                <button
                                    className="boton-paginacion"
                                    onClick={() => {
                                        setAccionModal('retiro');
                                        setIdEquipo(item._id);
                                        setMostrarModal(true);
                                    }}
                                >
                                    Retirar
                                </button>

                                <button
                                    className="boton-paginacion"
                                    onClick={() => {
                                        setAccionModal('cambio');
                                        setIdEquipo(item._id);
                                        setMostrarModal(true);
                                    }}
                                >
                                    cambio
                                </button>
                            </>
                        </div>
                    ))
                    }
                </div>

            </div >
            <button className="boton-paginacion" onClick={() => setMostrarModal(true)} >Modal</button>

            <Pagination
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalItems={datos.length}
            />

            <Modal mostrarModal={mostrarModal}


                cerrarModal={() => setMostrarModal(false)}
                setAccionModal={setAccionModal}
                onAceptar={async ()=>{
                    if (accionModal === 'retiro'){
                        await retiro(idEquipo);
                    }else if (accionModal === 'cambio' ){
                        await cambio(idEquipo)
                    }
                    setMostrarModal(false)
                } }
            />

        </>
    )
}
