import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


export const HeaderComponent: React.FC = (props) => {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Apply Here</Navbar.Brand>
                <Nav className="mr-auto">
                {/* <LinkContainer to="/"> */}
                    <Nav.Link href="#home">Home</Nav.Link>
                    {/* </LinkContainer> */}
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Products</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </>

    )

}

