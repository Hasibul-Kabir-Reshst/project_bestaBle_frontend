import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import { showError, showSuccess } from '../../utilities/messages';
import { createCategory } from '../../api/apiSeller';
import { userInfo } from '../../utilities/authentication';

const CreateCategory = () => {
    const [values, setValues] = useState({
        name: '',
        error: false,
        success: false
    });

    const { name, error, success } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({
            ...values,
            error: false,
            success: false
        });
        const { token } = userInfo();

        createCategory(token, { name: name })
            .then(response => {
                setValues({
                    ...values,
                    error: false,
                    success: true
                })
            })
            .catch(err => {
                if (err.response) setValues({
                    ...values,
                    error: err.response.data.error,
                    success: false
                })
                else setValues({
                    ...values,
                    error: "Something went wrong!",
                    success: false
                })


            })
    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
            error: false
        })
    }

    const categoryForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="text-muted">Category Name</label>
                    <input
                        name="name"
                        type="text"
                        onChange={handleChange}
                        value={name}
                        autoFocus
                        required
                        className="form-control"
                    />
                </div>
                <br />
                <button type="submit" className="btn btn-outline-primary">Create Category</button>
            </form>
        )
    }

    const goBack = () => (<div className="mt-5">
        <Link to="/sellerdashboard" className="text-warning">Back to Dashboard</Link>
    </div>)


    return (
        <Layout title="Add a new category" description="Ready to add a new category?" className="container">
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    {showError(error, error)}
                    {showSuccess(success, 'Category Created!')}
                    {categoryForm()}
                    {goBack()}
                </div>
            </div>
        </Layout>
    );

}

export default CreateCategory;