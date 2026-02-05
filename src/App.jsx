import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera'
import Detalles from './componentes/Detalles/Detalles'

function App() {
	return (
		<div className="container-fluid p-0 m-0 fondo">
			<div className="cabecera">
				<Cabecera></Cabecera>
			</div>
			<div id="detalles" className="container-fuid py-5">
				<Detalles></Detalles>
			</div>
		</div>
	);
}

export default App
