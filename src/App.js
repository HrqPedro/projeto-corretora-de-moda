import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import "bootstrap/dist/css/bootstrap.min.css";

                 
function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Corretora Isabel Leite</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                Separated link
                </NavDropdown.Item>
              </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
       </Navbar>
      </header>
      <main>
        <Container>
          <Row className="px-4 my-5">
            <Col sm={7}>
              <Image src="/perfil.jpeg" alt="image" fluid rounded className=""/>
            </Col>
            <Col sm={5}>
              <h1 class="font-weight-light">Isabel Leite</h1>
              <p class="mt-4">texto para parágrafo aleatório texto para parágrafo aleatório texto para parágrafo aleatório texto para parágrafo aleatório texto para parágrafo aleatório texto para parágrafo aleatório texto para parágrafo aleatório texto para parágrafo aleatório texto para parágrafo aleatório texto para parágrafo aleatório texto para parágrafo aleatório </p>
              <Button>Call to action</Button>
            </Col>
          </Row>   
          <Row>
            <Card className="text-center bg-secondary text-white my-5 py-4">
              <Card.Body>
                texto para parágrafo aleatório texto para parágrafo aleatório texto para parágrafo aleatório texto para parágrafo aleatório texto para parágrafo aleatório texto para parágrafo aleatório texto para parágrafo aleatório texto para parágrafo aleatório texto para parágrafo aleatório texto para parágrafo aleatório texto para parágrafo aleatório            
              </Card.Body>
            </Card>
          </Row>   
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/id/530/320/200" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/id/238/320/200" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://picsum.photos/id/831/320/200" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <footer class="py-5 my-5 bg-dark"> 
        <Container className="px-4 ">
          <p class="text-center text-white">Copyright &copy; Corretora Isabel Leite 2023</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
