import React from 'react';
 
import Menu from '../Menu/Menu';
import Card from "react-bootstrap";
import Jumbotron from "react-bootstrap";
import Button from "react-bootstrap";
import Container from "react-bootstrap";
import Footer from '../Footer/Footer';

 
class Servicios extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Menu />
 
			<main role="main" className="flex-shrink-0 mt-5">
 
				<section className="text-center">
				    <div className="container">
				      <h1 className="jumbotron-heading">Productos </h1>
				      <p className="lead text-muted">
				      	Lo bueno, bonito y barato del e-commerce
				      </p>				      
				    </div>
				</section>
 
		        <div className="album py-5 bg-light">
				    <div className="container">
 
				      <div className="row">
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
				            <img src="imagenes/foto1.PNG" class="card-img-top" alt="chompaBlanca"><text x="50%" y="50%" fill="#eceeef" dy=".3em">Chompa Mujer</text></img>
				            <div className="card-body">
							<h5 class="card-title">Chompa de lana Blanco S/.80.00 </h5>
       						 <p class="card-text">
									<li>Sku: NO.ZR142</li>
									<li>Descripción: Chompa de lana color blanco.</li>
									<li>Stock: 5</li>
									<li>Precio: S/80.00</li>
				              </p>
				              <div className="d-flex justify-content-between align-items-center">
				                <div className="btn-group">
				                  <button type="button" className="btn btn-sm btn-outline-secondary">Lo Quiero</button>
				                  
				                </div>
				                
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
				            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Servicio 2"><title>Servicio 2</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Servicio 2</text></svg>
				            <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">
				                <div className="btn-group">
				                  <button type="button" className="btn btn-sm btn-outline-secondary">Lo Quiero</button>
				                  
				                </div>
				                
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
				            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Servicio 3"><title>Servicio 3</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Servicio 3</text></svg>
				            <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">
				                <div className="btn-group">
				                  <button type="button" className="btn btn-sm btn-outline-secondary">Lo Quiero</button>
				                  
				                </div>
				                
				              </div>
				            </div>
				          </div>
				        </div>
 
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
				            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Servicio 4"><title>Servicio 4</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Servicio 4</text></svg>
				            <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">
				                <div className="btn-group">
				                  <button type="button" className="btn btn-sm btn-outline-secondary">Lo Quiero</button>
				                  
				                </div>
				                
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
				            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Servicio 5"><title>Servicio 5</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Servicio 5</text></svg>
				            <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">
				                <div className="btn-group">
				                  <button type="button" className="btn btn-sm btn-outline-secondary">Lo Quiero</button>
				                  
				                </div>
				                
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
				            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Servicio 6"><title>Servicio 6</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Servicio 6</text></svg>
				            <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">
				                <div className="btn-group">
				                  <button type="button" className="btn btn-sm btn-outline-secondary">Lo Quiero</button>
				                  
				                </div>
				                
				              </div>
				            </div>
				          </div>
				        </div>
 
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
				            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Servicio 7"><title>Servicio 7</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Servicio 7</text></svg>
				            <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">
				                <div className="btn-group">
				                  <button type="button" className="btn btn-sm btn-outline-secondary">Lo Quiero</button>
				                  
				                </div>
				                
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
				            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Servicio 8"><title>Servicio 8</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Servicio 8</text></svg>
				            <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">
				                <div className="btn-group">
				                  <button type="button" className="btn btn-sm btn-outline-secondary">Lo Quiero</button>
				                  
				                </div>
				                
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
				            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Servicio 9"><title>Servicio 9</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Servicio 9</text></svg>
				            <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">
				                <div className="btn-group">
				                  <button type="button" className="btn btn-sm btn-outline-secondary">Lo Quiero</button>
				                  
				                </div>
				                
				              </div>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>
				</div>
 
	  		</main>
 
	  		<Footer />
 
	  		</>
 
		)
 
	}
 
}
 
export default Servicios;