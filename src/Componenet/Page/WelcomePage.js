import { Navbar,Container } from "react-bootstrap";
const Welcome = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Welcome</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Welcome;
