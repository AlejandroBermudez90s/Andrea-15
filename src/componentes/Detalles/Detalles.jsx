import CuentaAtras from "../CuentaAtras/CuentaAtras"
import Ubicacion from "../Ubicacion/Ubicacion"
import DressCode from "../DressCode/DressCode"
import './Detalles.css'


const Detalles = () => {
    return (
        <div className="container py-5 vh-100">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <h2 className="text-center mb-5 fw-bold">Información del evento</h2>
                    <div className="accordion" id="accordionDetalles">
                        <div className="accordion-item mb-3 border-0 shadow-sm">
                            <h2 className="accordion-header">
                                <button 
                                    className="accordion-button collapsed fw-semibold" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#collapseCuenta"
                                    aria-expanded="false" 
                                    aria-controls="collapseCuenta"
                                >
                                    <i className="bi bi-calendar-event me-3"></i>
                                    Fecha y hora
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
                        <div className="accordion-item mb-3 border-0 shadow-sm">
                            <h2 className="accordion-header">
                                <button 
                                    className="accordion-button collapsed fw-semibold" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#collapseUbicacion"
                                    aria-expanded="false" 
                                    aria-controls="collapseUbicacion"
                                >
                                    <i className="bi bi-geo-alt-fill me-3"></i>
                                    Ubicación
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
                        <div className="accordion-item mb-3 border-0 shadow-sm">
                            <h2 className="accordion-header">
                                <button 
                                    className="accordion-button collapsed fw-semibold" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#collapseCodigo"
                                    aria-expanded="false" 
                                    aria-controls="collapseCodigo"
                                >
                                    <i className="bi bi-palette-fill me-3"></i>
                                    Dress code
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
    )
}

export default Detalles