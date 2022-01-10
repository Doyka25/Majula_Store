import React from 'react';
 import Menu from '../menu/Menu';
import Jumbo from './jumbotron/Jumbo'; 
import Detalles from './detalles/Detalles'; 
import Footer from '../footer/Footer';
 
 

class Nosotros extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Menu />
 
			<main role="main" className="flex-shrink-0 mt-5">
		        
				<Jumbo /> 
				<Detalles />  
 
	  		</main>
 
	  		<Footer />
 
	  		</>
 
		)
 
	}
 
}
 
export default Nosotros;