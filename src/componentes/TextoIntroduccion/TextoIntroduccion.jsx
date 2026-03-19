import './TextoIntroduccion.css'

const Detalles = () => {

  return (
    <div className="detalles-section">
      <div className="container-fluid py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9">
            <div className="text-center mb-5 section-header">
              <div className="decorative-line mb-3"></div>
              <h2 className="display-4 fw-bold text-white mb-3 fuente">
                Título
              </h2>
              <p className="lead text-white-80 mb-3 fuenteParrafo">
                "Hay momentos en la vida que marcan el corazón para siempre…
                Muy pronto viviré uno de los días más importantes de mi vida,
                dejando atrás mi niñez para comenzar una nueva etapa.
              </p>
              <p className="lead text-white-80 mb-3 fuenteParrafo">
                Quiero celebrarlo rodeada de las personas que más quiero,
                será un honor que me acompañes en este día tan especial.
              </p>
              <p className="lead text-white-80 fuenteParrafo">
                Tu presencia es el mejor regalo que puedo recibir en esta 
                celebración única, donde brindaremos por la alegría de vivir 
                y los hermosos recuerdos que aún están por venir."
              </p>
              <p className="lead text-white-60 mb-3 fuenteParrafo">
                Andrea
              </p>
              <div className='boton'>
                    <a href="#detalles" className="btn btn-outline-light btn-sm px-3 shadow-lg">
                        Ver detalles
                    </a>
                </div>
              <div className="decorative-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detalles