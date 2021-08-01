import React from 'react'
import { Nav, Navbar, Button, Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="px-5">
                <Navbar.Brand as={Link} to="/">Shopee</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link >Home</Nav.Link>

                    </Nav>
                    <Form className='d-flex' >
                        <Button variant="outline-success">Search</Button>
                        <FormControl
                            type="text"
                            className="mr-sm-2"
                        />

                        <Button variant="outline-success" as={Link} to="/signin">SignIn</Button>
                        <Button variant="outline-success" as={Link} to="/cart">Cart</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div >
    )
}

export default NavigationBar
