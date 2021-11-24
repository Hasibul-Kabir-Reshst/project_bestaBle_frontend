import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import { showError, showLoading, showSuccess } from "../../utilities/messages";
import { userInfo } from "../../utilities/authentication";
import { addService, getCategories } from "../../api/apiSeller";

const AddService = () => {
    const { userId, userName, email, role } = userInfo();
    const [values, setValues] = useState({
        title: '',
        description: '',
        price: '',
        categories: [],
        category: '',
        seller: '',
        deleverytime: '',
        loading: false,
        error: false,
        success: false,
        disabled: false,
        formData: '',
    });

    const {
        title,
        description,
        price,
        categories,
        category,
        seller,
        deleverytime,
        loading,
        error,
        success,
        formData,
        disabled
    } = values;

    useEffect(() => {
        getCategories()
            .then(response => {
                setValues({
                    ...values,
                    categories: response.data,
                    formData: new FormData()
                })
            })
            .catch(error => {
                setValues({
                    ...values,
                    error: "Failed to load categories!",
                    formData: new FormData()
                })
            })
    }, [])

    const handleChange = (e) => {
        const value = e.target.name === 'photo' ? e.target.files[0] : e.target.value;

        formData.set(e.target.name, value);
        setValues({
            ...values,
            [e.target.name]: value,
            error: false,
            success: false
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({
            ...values,
            error: false,
            loading: true,
            disabled: true,
            success: false
        })

        const { token } = userInfo();
        addService(token, formData)
            .then(response => {
                setValues({
                    ...values,
                    title: '',
                    description: '',
                    price: '',
                    category: '',
                    seller: '',
                    deleverytime: '',
                    loading: false,
                    disabled: false,
                    success: true,
                    error: false

                })
            })
            .catch(err => {
                let errMsg = "Something went wrong";
                if (err.response) errMsg = err.response.data;
                setValues({
                    ...values,
                    error: errMsg,
                    loading: false,
                    success: false,
                    disabled: false
                })
            })
    }

    const serviceForm = () => (
        <form className="mb-3 mt-5" onSubmit={handleSubmit}>
            <h4>Photo:</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input
                        type="file"
                        name="photo"
                        onChange={handleChange}
                        accept="image/*"
                        required
                    />
                </label>
            </div>
            <div className="form-group">
                <label className="text-muted">UserId:</label>
                <input
                    name="seller"
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    value={seller}
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Title:</label>
                <input
                    name="title"
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    value={title}
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Description:</label>
                <textarea
                    name="description"
                    onChange={handleChange}
                    className="form-control"
                    value={description}
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Price:</label>
                <input
                    name="price"
                    onChange={handleChange}
                    className="form-control"
                    type="number"
                    value={price}
                    required
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Delevery time:</label>
                <input
                    name="deleverytime"
                    onChange={handleChange}
                    className="form-control"
                    type="number"
                    value={deleverytime}
                    required
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Category:</label>
                <select name="category" value={category} onChange={handleChange} className="form-control" required>
                    <option value="">----Select Category----</option>
                    {categories && categories.map(item => (
                        <option value={item._id} key={item._id}>{item.name}</option>
                    ))}
                </select>
            </div>
            <br />
            <button className="btn btn-outline-primary" type="submit" disabled={disabled}>ADD SERVICE</button>
        </form>
    );

    const goBack = () => (<div className="mt-5">
        <Link to="sellerdashboard" className="text-warning">Back to Dashboard</Link>
    </div>)


    return (
        <Layout title="Add a new service" className="container">
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    {showError(error, error)}
                    {showLoading(loading)}
                    {showSuccess(success, 'Product Added Successfully!')}
                    {serviceForm()}
                    {goBack()}
                </div>
            </div>
        </Layout>
    );

}

export default AddService;