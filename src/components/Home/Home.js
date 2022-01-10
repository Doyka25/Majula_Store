import React from 'react';
 import Menu from '../menu/Menu';
import Slider from './slider/Slider';
import Servicios from './servicios/Servicios';
import Footer from '../footer/Footer';
 
class Home extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<menu /> 
 
			<main role="main" className="flex-shrink-0 mt-5">
 
		            <div className="container">
		  	  		
		  	        <Slider /> // Componente Slider (Lo crearé a continuación) 
		  	        <Servicios /> // Componente Servicios (Lo crearé a continuación) 
 
		  	        <hr className="featurette-divider" />
 
		            </div>
 
	  		</main>
			  <Menu />
	  		<Footer />
 
	  		</>
 
		)
 
	}
 
}
 
export default Home;