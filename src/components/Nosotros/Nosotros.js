import React from 'react';
 import Menu from '../Menu/Menu';
import Jumbo from './Jumbo/Jumbo'; 
import Detalles from './Detalles/Detalles'; 
import Footer from '../Footer/Footer';
 
 

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