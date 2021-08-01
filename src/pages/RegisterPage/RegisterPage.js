import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, FloatingLabel, Button, Container } from 'react-bootstrap'
import { useDispatch } from "react-redux";
import authActions from '../../redux/actions/auth.action';

import './style.css'
import NavigationBar from '../../components/NavigationBar/NavigationBar'


const RegisterPage = () => {

    const dispatch = useDispatch()
    const [user, setUser] = useState({ name: "", email: "", password: "" });

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onRegister = (e) => {
        e.preventDefault()
        dispatch(authActions.registerRequest(user))
        console.log("this submit", user)
    }


    return (
        <>
            <NavigationBar />
            <Container>
                <Form className="form-signin" onSubmit={onRegister}>

                    <Form.Group
                        className="mb-3"
                        controlId="formBasicText"
                    >
                        <FloatingLabel
                            className="form-floating mb-3"
                            controlId="floatingInput"
                            label="Name"

                        >
                            <Form.Control
                                type="text"
                                name="name"
                                value={user.name}
                                placeholder="Your name here"
                                onChange={onChange}
                            />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="formBasicEmail"
                    >
                        <FloatingLabel
                            className="form-floating mb-3"
                            controlId="floatingInput"
                            label="Email address"
                        >
                            <Form.Control
                                type="email"
                                name="email"
                                value={user.email}
                                placeholder="name@example.com"
                                onChange={onChange}
                            />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                    >
                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Password"
                        >
                            <Form.Control
                                type="password"
                                name="password"
                                value={user.password}
                                placeholder="Password"
                                onChange={onChange}
                            />
                        </FloatingLabel>
                    </Form.Group>

                    <Button className="w-100 btn btn-lg btn-primary" type="submit">Register</Button>
                    <Form.Text className="text-muted">
                        Already have an account? Let's <Link to="/signin">Sign In</Link>
                    </Form.Text>
                </Form>
            </Container>

        </>
    )
}

export default RegisterPage
