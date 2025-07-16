import { useEffect, useState } from "react";
import "./retiro.css";
import Input from "../input/Input";

export const Retiro = () => {
    const [retiros, setRetiros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [findRetiros, setFindRetiros] = useState('')
    console.log("Estado inicial:", retiros);

    useEffect(() => {
        fetch('https://it-inventario-backend-d0w89i05t-jzpoes-projects.vercel.app/inventario/retiro')
            .then(res => res.json())
            .then(data => {
                console.log("Datos recibidos del backend:", data);
                setRetiros(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error en fetch:", err);
                setLoading(false); // ⚠️ También termina si hay error

            });

       
    }, []);
 if (loading) {
            return <p>Cargando equipos retirados...</p>;
        }

        const busquedaRetiros = retiros.filter(item =>
        (item.serial|| '').toLowerCase().includes(findRetiros.toLowerCase()) ||
        (item.personaasignada || '').toLowerCase().includes(findRetiros.toLowerCase()) ||
        (item.marca || '').toLowerCase().includes(findRetiros.toLowerCase())||
        (item.activofijo || '').toLowerCase().includes(findRetiros.toLowerCase())

        )


    return (
        <div className="inventario-retiro">
            <Input findRetiros={findRetiros} setFindRetiros={setFindRetiros}  />
            <h2>Equipos Retirados</h2>
            <div className="retirados">
                {busquedaRetiros.length === 0 ? (
                    <p>No hay equipos retirados.</p>
                ) : (
                    busquedaRetiros.map(item => (
                        <div key={item._id} className="card-retiro-container">
                            <p><strong>ID:</strong> {item._id}</p>
                            <p><strong>Serial:</strong> {item.serial}</p>
                            <p><strong>Activo Fijo:</strong> {item.activofijo}</p>
                            <p><strong>Estado:</strong> {item.estado}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

