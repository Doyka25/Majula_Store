import { CartWidget } from "./CartWidget"
import { Navbar as BootstrapNavBar, Container, Nav, NavDropdown } from "react-bootstrap"

// Problema 1: el `src` de un img debe ser la ruta hacia la imagen
// en este caso: `/imagenes/majula_logo.png`
// Solucion: cambiar `majula.png` por `/imagenes/majula_logo.png`


// Problema 2: Tu component NavBar interfiere con el de react-bootstrap porque se llaman igual
// Solucion: renombrar el componente de bootstrap hacia otro, por ejemplo: BootstrapBootstrapNavBar
// import { BootstrapNavBar as BootstrapBootstrapNavBar, ... 
// y usar BootstrapBootstrapNavBar en lugar de BootstrapNavBar en el JSX.

export default function NavBar() {
  return (
    <header>
      <BootstrapNavBar bg="light" expand="lg">
        <Container>
          <BootstrapNavBar.Brand href="/">
            <img
              src="/imagenes/majula_logo.png"
              width="191"
              height="66"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </BootstrapNavBar.Brand>
          <BootstrapNavBar.Toggle aria-controls="basic-BootstrapNavBar-nav" />
          <BootstrapNavBar.Collapse id="basic-BootstrapNavBar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Lo + Top</Nav.Link>
              <Nav.Link href="#">Nuevos productos</Nav.Link>
              <Nav.Link href="#">Formas de pago</Nav.Link>
              <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Moda Mujer y Hombre</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Belleza</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Electro</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Oficina</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.5">Vende Aquí</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </BootstrapNavBar.Collapse>
        </Container>
      </BootstrapNavBar>
      <CartWidget numOfItems={2} />
    </header>
  )
}