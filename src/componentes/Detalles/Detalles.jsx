import CuentaAtras from "../CuentaAtras/CuentaAtras"
import Ubicacion from "../Ubicacion/Ubicacion"
import './Detalles.css'
import DressCode from "../DressCode/DressCode"
import ConfirmarAsistencia from "../ConfirmarAsistencia/ConfirmarAsistencia"
import { useEffect } from "react"

const Detalles = () => {
    useEffect(() => {
        // Obtener todos los botones del acordeón
        const accordionButtons = document.querySelectorAll('.accordion-button');
        
        accordionButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Solo hacer scroll si el acordeón está colapsado (se va a abrir)
                if (this.classList.contains('collapsed')) {
                    // Pequeño delay para que la animación de apertura comience
                    setTimeout(() => {
                        // Obtener el elemento del acordeón
                        const accordionItem = this.closest('.accordion-item');
                        
                        // Calcular la posición con un offset para que no quede pegado arriba
                        const offset = 100; // Espacio desde la parte superior
                        const elementPosition = accordionItem.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        
                        // Hacer scroll suave
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }, 100);
                }
            });
        });
        
        // Cleanup: remover los event listeners cuando el componente se desmonte
        return () => {
            accordionButtons.forEach(button => {
                button.removeEventListener('click', () => {});
            });
        };
    }, []);

    return (
        <div className="detalles-section">
            <div className="container-fluid py-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-9">
                        {/* Título principal mejorado */}
                        <div className="text-center mb-5 section-header">
                            <div className="decorative-line mb-3"></div>
                            <h2 className="display-4 fw-bold text-white mb-3 fuente">
                                Detalles de la celebración
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

                            {/* Confirmar Asistencia */}
                            <div className="accordion-item mb-4">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseConfirmar"
                                        aria-expanded="false"
                                        aria-controls="collapseConfirmar"
                                    >
                                        <div className="accordion-icon-wrapper me-3">
                                            <i className="bi bi-check-circle-fill"></i>
                                        </div>
                                        <span className="accordion-title">Confirmar asistencia</span>
                                    </button>
                                </h2>

                                <div
                                    id="collapseConfirmar"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionDetalles"
                                >
                                    <div className="accordion-body">
                                        <ConfirmarAsistencia />
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