import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container text-center">
                {/* Mensaje de Despedida */}
                <div className="footer-thanks">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2 className="thanks-title">¡Te esperamos!</h2>
                    <p className="thanks-text">
                        Gracias por dedicar un momento a leer nuestra invitación.
                        Tu presencia es lo que hará este día inolvidable.
                    </p>
                    <div className="footer-heart">💙</div>
                </div>

                {/* Tarjeta de Autor Minimalista */}
                <div className="author-card">
                    <p>Hecho por: <strong>Alejandro Bermúdez</strong></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;