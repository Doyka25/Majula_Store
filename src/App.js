import './App.css'
import { Fragment } from 'react'
import Menu from './components/Menu/Menu'
import { Nosotros } from './components/Menu/Nosotros'
import Servicios from './components/Menu/Servicios'



// Primer problema: fragment comienza con minuscula
// Solucion: renombrar fragment => Fragment, lo correcto es la primera letra en mayuscula

// Segundo problema: Fragment no esta siendo importado
// Solucion: importar => import { Fragment } from 'react' al inicio del archivo

function App() {
  return (
    <Fragment>
      <Menu />
      <Nosotros />
      <Servicios />
    </Fragment>

   
  );
}

export default App
