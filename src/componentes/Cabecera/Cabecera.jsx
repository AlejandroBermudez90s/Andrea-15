import './Cabecera.css'

const Cabecera = () => {

	return (
		<div>
			<h1 className="display-1 fw-bold titulo">ANDREA</h1>
			<h3 className="lead fst-italic">XV AÑOS</h3>

			<a href="#detalles" className="btn btn-outline-light btn-lg mt-4 px-5 shadow-sm">
				Ver detalles
			</a>
		</div>
	)
}

export default Cabecera