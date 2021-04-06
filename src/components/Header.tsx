import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
const styles = require("./Header.module.scss");


export const HeaderComponent: React.FC = (props) => {

    return (
        <>
            <Navbar className={styles['yellow-bar']}>
                <Navbar.Brand style={{fontSize: "32px"}}>SAMPLE STATE</Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
            </Navbar>
            <Navbar className={styles['blue-bar']}>
                <Navbar.Brand className={styles['white-text']} href="#home">SAMPLE IES</Navbar.Brand>
                <Nav className="mr-auto">
                {/* <LinkContainer to="/"> */}
                    {/* <Nav.Link href="#home">Home</Nav.Link> */}
                    {/* </LinkContainer> */}
                    {/* <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Products</Nav.Link> */}
                    
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form> */}
            </Navbar>
        </>

    )

}

