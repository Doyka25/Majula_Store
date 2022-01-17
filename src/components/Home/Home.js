import React from 'react';
import Menu from './components/Menu/Menu';
import Slider from './components/Home/Slider';
import Footer from '../Footer/Footer';

 
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