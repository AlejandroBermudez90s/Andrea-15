import './Cabecera.css'

const Cabecera = () => {

	return (
		<div className="cabecera">
			<div className="texto">
				<h1 className="andrea">Andrea</h1>
				
			</div>
			<div className='boton'>
				<h2 className="andrea2">15 Años</h2>
				<a href="#detalles" className="btn btn-outline-light btn-sm mt-4 px-3 shadow-sm">
					Ver detalles
				</a>
			</div>
		</div>
	)
}

export default Cabecera