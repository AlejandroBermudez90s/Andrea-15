import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera'
import Detalles from './componentes/Detalles/Detalles'
import Atrapado from './componentes/Atrapado/Atrapado'
import SeguirBajando from './componentes/SeguirBajando/SeguirBajando'
import Dinero from './componentes/Dinero/Dinero'
import Footer from './componentes/Footer/Footer'


function App() {
	return (
		<div className="container-fluid p-0 m-0 fondo">
			<div className="cabecera">
				<Cabecera></Cabecera>
			</div>
				<Detalles></Detalles>
				<SeguirBajando></SeguirBajando>
				<Atrapado></Atrapado>
				<Dinero></Dinero>
				<Footer></Footer>
		</div>
	);
}

export default App
