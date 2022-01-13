import React from 'react';
 
import Menu from '../Menu/Menu';
import Formulario from './Formulario/Formulario';
import Mapa from './Mapa/Mapa';
import Footer from '../Footer/Footer';
import Container from 'react-bootstrap';
 
 
class Contacto extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Menu />
 
			<main role="main" className="flex-shrink-0 mt-5">
 
				<div className="container">
 
					<h1 className="mb-5">Contacto</h1>
 
            		<div className="row">
 
            			<div className="col-md-6">
		        
							<Formulario /> <span></span>
 
						</div>
 
						<div className="col-md-6">
		        
							<Mapa /> <span></span>
 
						</div>
 
					</div>
				</div>	
 
	  		</main>
 
	  		<Footer />
 
	  		</>
 
		)
 
	}
 
}
 
export default Contacto;