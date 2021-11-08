
import { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import { showError, showLoading } from '../../utilities/messages';
import { register } from '../../api/apiAuth';

const SignUp = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: false,
        loading: false,
        disabled: false,
        success: false
    });

    const { name, email, password, error, loading, disabled, success } = values;

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
        });

        register({ name, email, password })
            .then(response => {
                setValues({
                    name: '',
                    email: '',
                    password: '',
                    loading: false,
                    disabled: false,
                    success: true
                })
            })

            .catch(err => {
                let errMsg = 'Something went wrong!';
                if (err.response) {
                    errMsg = err.response.data;
                } else {
                    console.log(err);
                    //errMsg = err.message;
                }
                setValues({ ...values, error: errMsg, disabled: false, loading: false })
            })
    }

    const signUpForm = () => (
        <Form onSubmit={handleSubmit}>
            <FormGroup row>
                <Label for="exampleEmail" sm={2}>Name</Label>
                <Col sm={6}>
                    <Input type="text" name="name" id="exampleEmail" placeholder="User Name" value={name} required onChange={handleChange} />
                </Col>
            </FormGroup>
            <br />
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
                    <Button type="submit" disabled={disabled}>SignUp</Button>
                </Col>
            </FormGroup>
        </Form>
    );

    const showSuccess = () => {
        if (success) return (
            <div className="alert alert-primary">Successfully Registered. Please <Link to="/signin">SignIn</Link> </div>
        )
    };

    return (
        <Layout title="signup" className="container col-md-8 offset-md-2 mt-5" >
            <br />
            <br />
            <br />
            {showSuccess()}
            {showLoading(loading)}
            {showError(error, error)}
            <h3>SignUp</h3>
            <hr />
            {signUpForm()}
            <hr />
        </Layout>
    );
}

export default SignUp;