import './DressCode.css'

const DressCode = () => {
    return (
        <div>
            {/* Título principal */}
            <div className="text-center mb-5">
                <h2 className="fw-bold text-primary mb-2">
                    <i className="bi bi-stars me-2"></i>
                    Código de Vestimenta
                </h2>
                <p className="text-muted">Vístete elegante para esta ocasión especial</p>
            </div>

            {/* Card de Color Reservado - AVISO IMPORTANTE */}
            <div className="alert-card-wrapper mb-5">
                <div className="card reserved-color-card border-0 shadow-lg">
                    <div className="card-body p-4 text-center">
                        <div className="reserved-icon-wrapper mb-3">
                            <i className="bi bi-exclamation-triangle-fill"></i>
                        </div>
                        <h3 className="fw-bold mb-3">
                            <i className="bi bi-palette-fill me-2"></i>
                            Color Reservado
                        </h3>
                        <p className="lead mb-3">
                            El siguiente color está <strong>exclusivamente reservado</strong> para la quinceañera
                        </p>
                        
                        {/* Muestra del color */}
                        <div className="color-display-wrapper mb-3">
                            <div className="color-sample" style={{backgroundColor: '#1900ffff'}}>
                                <span className="color-name">AZUL ELECTRICO</span>
                            </div>
                        </div>
                        
                        <div className="alert alert-warning border-0 mb-0 d-inline-block">
                            <i className="bi bi-info-circle-fill me-2"></i>
                            Está <strong>terminantemente prohibido, </strong> nadie brillará más que Andrea esa noche 
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards de Mujer y Hombre */}
            <div className="row g-4 mb-5">
                {/* Card Mujer */}
                <div className="col-12 col-md-6">
                    <div className="card dresscode-card border-0 shadow-sm h-100">
                        <div className="card-body text-center p-4">
                            {/* Icono/Imagen del vestido */}
                            <div className="dresscode-icon-wrapper mb-4">
                                <i className="bi bi-emoji-heart-eyes dresscode-icon women"></i>
                                <div className="dress-illustration">
                                    <svg viewBox="0 0 200 280" className="dress-svg">
                                        {/* Vestido elegante */}
                                        <path d="M100,40 L80,60 L70,120 L65,200 L65,280 L135,280 L135,200 L130,120 L120,60 Z" 
                                              fill="url(#gradient-women)" stroke="#C084FC" strokeWidth="2"/>
                                        {/* Detalle superior */}
                                        <circle cx="100" cy="35" r="8" fill="#C084FC"/>
                                        <path d="M92,43 Q100,50 108,43" stroke="#C084FC" strokeWidth="2" fill="none"/>
                                        
                                        <defs>
                                            <linearGradient id="gradient-women" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" style={{stopColor: '#F0ABFC', stopOpacity: 1}} />
                                                <stop offset="100%" style={{stopColor: '#C084FC', stopOpacity: 1}} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            
                            <h3 className="fw-bold mb-3" style={{color: '#8a5cb8ff'}}>Guapas</h3>
                            <p className="text-muted small fst-italic mb-0">Elegancia y sofisticación</p>
                        </div>
                    </div>
                </div>

                {/* Card Hombre */}
                <div className="col-12 col-md-6">
                    <div className="card dresscode-card border-0 shadow-sm h-100">
                        <div className="card-body text-center p-4">
                            {/* Icono/Imagen del traje */}
                            <div className="dresscode-icon-wrapper mb-4">
                                <i className="bi bi-star-fill dresscode-icon men"></i>
                                <div className="suit-illustration">
                                    <svg viewBox="0 0 200 280" className="suit-svg">
                                        {/* Traje */}
                                        <path d="M100,50 L75,70 L70,150 L70,280 L95,280 L95,150 L100,120 L105,150 L105,280 L130,280 L130,150 L125,70 Z" 
                                              fill="url(#gradient-men)" stroke="#041024ff" strokeWidth="2"/>
                                        {/* Corbata */}
                                        <path d="M100,50 L95,120 L100,140 L105,120 Z" fill="#050e2eff"/>
                                        {/* Cuello */}
                                        <path d="M85,55 L100,50 L115,55" stroke="#05152eff" strokeWidth="3" fill="none"/>
                                        <circle cx="100" cy="48" r="6" fill="#0c2144ff"/>
                                        
                                        <defs>
                                            <linearGradient id="gradient-men" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" style={{stopColor: '#bbc4d1ff', stopOpacity: 1}} />
                                                <stop offset="100%" style={{stopColor: '#030f22ff', stopOpacity: 1}} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            
                            <h3 className="fw-bold mb-3" style={{color: '#1a3d79ff'}}>Guapos</h3>
                            <p className="text-muted small fst-italic mb-0">Formalidad y distinción</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Normas del Dress Code */}
            <div className="card dresscode-rules-card border-0 shadow-sm">
                <div className="card-body p-4">
                    <h3 className="text-center fw-bold mb-4 text-primary">
                        <i className="bi bi-list-check me-2"></i>
                        Normas a Seguir
                    </h3>
                    
                    <div className="row">
                        {/* Normas para Mujeres */}
                        <div className="col-12 col-md-6 mb-4 mb-md-0">
                            <div className="rules-section women-section">
                                <h5 className="fw-semibold mb-3 d-flex align-items-center">
                                    <span className="badge rounded-pill me-2" style={{backgroundColor: '#C084FC'}}>
                                        <i className="bi bi-person-dress"></i>
                                    </span>
                                    Para Ellas
                                </h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-0 px-0">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        Vestido de cóctel o largo
                                    </li>
                                    <li className="list-group-item border-0 px-0">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        Colores pasteles o tonos joya
                                    </li>
                                    <li className="list-group-item border-0 px-0">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        Tacones elegantes
                                    </li>
                                    <li className="list-group-item border-0 px-0">
                                        <i className="bi bi-x-circle-fill text-danger me-2"></i>
                                        Evitar el color blanco
                                    </li>
                                    <li className="list-group-item border-0 px-0">
                                        <i className="bi bi-x-circle-fill text-danger me-2"></i>
                                        No usar jeans ni ropa casual
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Normas para Hombres */}
                        <div className="col-12 col-md-6">
                            <div className="rules-section men-section">
                                <h5 className="fw-semibold mb-3 d-flex align-items-center">
                                    <span className="badge rounded-pill me-2" style={{backgroundColor: '#3B82F6'}}>
                                        <i className="bi bi-person-standing"></i>
                                    </span>
                                    Para Ellos
                                </h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-0 px-0">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        Traje completo con corbata
                                    </li>
                                    <li className="list-group-item border-0 px-0">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        Colores oscuros o neutros
                                    </li>
                                    <li className="list-group-item border-0 px-0">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        Zapatos de vestir
                                    </li>
                                    <li className="list-group-item border-0 px-0">
                                        <i className="bi bi-x-circle-fill text-danger me-2"></i>
                                        No usar jeans ni tenis
                                    </li>
                                    <li className="list-group-item border-0 px-0">
                                        <i className="bi bi-x-circle-fill text-danger me-2"></i>
                                        Evitar ropa demasiado casual
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Nota adicional */}
                    <div className="alert alert-info mt-4 mb-0 border-0" style={{backgroundColor: '#E0F2FE'}}>
                        <i className="bi bi-info-circle-fill me-2"></i>
                        <strong>Nota:</strong> La elegancia es la clave. Queremos que todos luzcan espectaculares en este día tan especial.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DressCode