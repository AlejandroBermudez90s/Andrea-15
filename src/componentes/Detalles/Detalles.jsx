import CuentaAtras from "../CuentaAtras/CuentaAtras"
import Ubicacion from "../Ubicacion/Ubicacion"
import './Detalles.css'
import DressCode from "../DressCode/DressCode"

const Detalles = () => {
    return (
        <div className="detalles-section">
            <div className="container-fluid py-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-9">
                        {/* Título principal mejorado */}
                        <div className="text-center mb-5 section-header">
                            <div className="decorative-line mb-3"></div>
                            <h2 className="display-4 fw-bold text-white mb-3 fuente">
                                Detalles de la Celebración
                            </h2>
                            <p className="lead text-white-50 mb-4 fuenteParrafo">
                                Todo lo que necesitas saber para este día tan especial
                            </p>
                            <div className="decorative-line"></div>
                        </div>
                        
                        <div className="accordion accordion-custom" id="accordionDetalles">
                            {/* Cuenta Atrás */}
                            <div className="accordion-item mb-4">
                                <h2 className="accordion-header">
                                    <button 
                                        className="accordion-button collapsed" 
                                        type="button" 
                                        data-bs-toggle="collapse" 
                                        data-bs-target="#collapseCuenta"
                                        aria-expanded="false" 
                                        aria-controls="collapseCuenta"
                                    >
                                        <div className="accordion-icon-wrapper me-3">
                                            <i className="bi bi-calendar-event"></i>
                                        </div>
                                        <span className="accordion-title">Fecha y hora</span>
                                    </button>
                                </h2>
                                <div 
                                    id="collapseCuenta" 
                                    className="accordion-collapse collapse" 
                                    data-bs-parent="#accordionDetalles"
                                >
                                    <div className="accordion-body">
                                        <CuentaAtras />
                                    </div>
                                </div>
                            </div>

                            {/* Ubicación */}
                            <div className="accordion-item mb-4">
                                <h2 className="accordion-header">
                                    <button 
                                        className="accordion-button collapsed" 
                                        type="button" 
                                        data-bs-toggle="collapse" 
                                        data-bs-target="#collapseUbicacion"
                                        aria-expanded="false" 
                                        aria-controls="collapseUbicacion"
                                    >
                                        <div className="accordion-icon-wrapper me-3">
                                            <i className="bi bi-geo-alt-fill"></i>
                                        </div>
                                        <span className="accordion-title">Ubicación</span>
                                    </button>
                                </h2>
                                <div 
                                    id="collapseUbicacion" 
                                    className="accordion-collapse collapse" 
                                    data-bs-parent="#accordionDetalles"
                                >
                                    <div className="accordion-body">
                                        <Ubicacion />
                                    </div>
                                </div>
                            </div>

                            {/* Código de Vestimenta */}
                            <div className="accordion-item mb-4">
                                <h2 className="accordion-header">
                                    <button 
                                        className="accordion-button collapsed" 
                                        type="button" 
                                        data-bs-toggle="collapse" 
                                        data-bs-target="#collapseCodigo"
                                        aria-expanded="false" 
                                        aria-controls="collapseCodigo"
                                    >
                                        <div className="accordion-icon-wrapper me-3">
                                            <i className="bi bi-palette-fill"></i>
                                        </div>
                                        <span className="accordion-title">Dress code</span>
                                    </button>
                                </h2>
                                <div 
                                    id="collapseCodigo" 
                                    className="accordion-collapse collapse" 
                                    data-bs-parent="#accordionDetalles"
                                >
                                    <div className="accordion-body">
                                        <DressCode />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalles