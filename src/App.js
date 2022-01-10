import './App.css'
import { Fragment } from 'react'
import { ItemListContainer } from './components/navegacion/ItemListContainer'
import Navbar from './components/navegacion/Navbar'


// Primer problema: fragment comienza con minuscula
// Solucion: renombrar fragment => Fragment, lo correcto es la primera letra en mayuscula

// Segundo problema: Fragment no esta siendo importado
// Solucion: importar => import { Fragment } from 'react' al inicio del archivo

function App() {
  return (
    <Fragment>
      <Navbar />
      <ItemListContainer />
    </Fragment>
  );
}

export default App
