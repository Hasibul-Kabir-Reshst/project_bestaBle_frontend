import { useState } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from "react-router-dom";
import Layout from "../Layout"
import { showError, showLoading } from '../../utilities/messages';
import { login } from "../../api/apiAuth";


const SignIn = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: false,
        loading: false,
        disabled: false,
        redirect: false
    });

    const { email, password, loading, error, redirect, disabled } = values;

    const handleChange = e => {
        setValues({
            ...values,
            error: false,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        setValues({
            ...values,
            error: false,
            loading: true,
            disabled: true
        })

        login({ email, password })
            .then(response => {
                setValues({
                    email: '',
                    password: '',
                    loading: false,
                    disabled: false,
                    redirect: true

                })
            })
            .catch(err => {
                let errMessage = 'Something went wrong!'
                if (err.response) {
                    errMessage = err.response.data;
                } else {
                    errMessage = err
                }
                setValues({
                    ...values,
                    error: errMessage,
                    disabled: false,
                    loading: false
                })
            })

    }

    const signInForm = () => (
        <Form onSubmit={handleSubmit}>
            <FormGroup row>
                <Label for="exampleEmail" sm={2}>Email</Label>
                <Col sm={6}>
                    <Input type="email" name="email" id="exampleEmail" placeholder="User Email" value={email} required onChange={handleChange} />
                </Col>
            </FormGroup>
            <br />
            <FormGroup row>
                <Label for="examplePassword" sm={2}>Password</Label>
                <Col sm={6}>
                    <Input type="password" name="password" id="examplePassword" placeholder="User Password" value={password} required onChange={handleChange} />
                </Col>
            </FormGroup>
            <br />
            <FormGroup check row>
                <Col sm={{ size: 10, offset: 4 }}>
                    <Button type="submit" disabled={disabled}>SignIn</Button>
                </Col>
            </FormGroup>
        </Form>
    );

    const redirectUser = () => {
        if (redirect) return <Redirect to="/" />
    }

    return (
        <Layout title="Login" className="container col-md-8 offset-md-2 mt-5">
            <br />
            <br />
            <br />
            {redirectUser()}
            {showLoading(loading)}
            {showError(error, error)}
            <h3>SignIn</h3>
            <hr />
            {signInForm()}
            <hr />
        </Layout>
    );
}

export default SignIn;