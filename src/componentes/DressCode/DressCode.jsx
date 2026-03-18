import './DressCode.css'

const DressCode = () => {
    return (
        <div className="dresscode-container">
            <div className="text-center mb-5">
                <h2 className="fw-bold text-primary mb-2">
                    <i className="bi bi-stars me-2"></i>
                    Código de vestimenta
                </h2>
                <p className="text-muted">Vístete elegante para esta ocasión tan especial</p>
            </div>
            {/* Color Reservado - Minimalista */}
            <div className="reserved-color-section">
                <p className="reserved-label">Color Reservado</p>
                <div className="color-sample" style={{backgroundColor: '#1900ff'}}>
                    <span className="color-name">Azul Eléctrico</span>
                </div>
                <p className="reserved-note">Exclusivo para la quinceañera</p>
            </div>

            {/* Dress Code - Dos columnas limpias */}
            <div className="dresscode-grid">
                {/* Ellas */}
                <div className="dresscode-column">
                    <h3 className="column-title">Ellas</h3>
                    <ul className="dresscode-list">
                        <li>Vestido de cóctel o largo</li>
                        <li>Colores pasteles o tonos joya</li>
                        <li>Tacones elegantes</li>
                        <li className="forbidden">× Evitar blanco y azul eléctrico</li>
                    </ul>
                </div>

                {/* Ellos */}
                <div className="dresscode-column">
                    <h3 className="column-title">Ellos</h3>
                    <ul className="dresscode-list">
                        <li>Traje completo con corbata</li>
                        <li>Colores oscuros o neutros</li>
                        <li>Zapatos de vestir</li>
                        <li className="forbidden">× No jeans ni tenis</li>
                    </ul>
                </div>
            </div>

            {/* Nota final - Sutil */}
            <p className="final-note">
                La elegancia es la clave
            </p>
        </div>
    )
}

export default DressCode