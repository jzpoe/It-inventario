import "./pagination.css"

export const Pagination = ({ currentPage, setCurrentPage, itemsPerPage, totalItems }) => {

  const totalPaginas = Math.ceil(totalItems / itemsPerPage);





  return (
    <div className="container-paginacion">
      <div className="paginacion div">
        <button className="boton-paginacion"
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>Página {currentPage} de {totalPaginas}</span>
        <button className="boton-paginacion"
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPaginas))}
          disabled={currentPage === totalPaginas}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}