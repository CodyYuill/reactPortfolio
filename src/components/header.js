import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function Header() {
    return (
        <>
            <Container fluid>
                <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                    <Navbar.Brand>Cody Yuill</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" expand="sm">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">About</Nav.Link>
                            <Nav.Link href="/projects">Projects</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </>
    );
}

export default Header;
