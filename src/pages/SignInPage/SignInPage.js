import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, FloatingLabel, Button, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import authActions from '../../redux/actions/auth.action'
import './style.css'
import NavigationBar from '../../components/NavigationBar/NavigationBar'


const SignInPage = () => {
    const dispatch = useDispatch()
    const [user, setUser] = useState({ email: "", password: "" });

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSignin = (e) => {
        e.preventDefault()
        dispatch(authActions.loginRequest())
        console.log("this submit", user)
    }
    return (
        <>
            <NavigationBar />
            <Container>
                <Form className="form-signin" onSubmit={onSignin}>
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
                                onChange={onChange}
                                placeholder="name@example.com"
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
                                placeholder="Password"
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className="checkbox" type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</Button>
                    <Form.Text className="text-muted">
                        Don't have an account yet? Let's <Link to="/register">Register</Link>
                    </Form.Text>
                </Form>


            </Container>

        </>
    )
}

export default SignInPage
