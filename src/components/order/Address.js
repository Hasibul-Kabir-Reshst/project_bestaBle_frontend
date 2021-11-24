import { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Layout from "../Layout";
import { getProfile, updateProfile } from "../../api/apiOrder";
import { userInfo } from "../../utilities/authentication";
import { isAuthenticated } from "../../utilities/authentication";

const Address = ({ history }) => {
    // const { userId } = userInfo();
    const [values, setValues] = useState({
        // user: '',
        phone: '',
        address: '',
        city: '',
        postcode: '',
        country: '',
    });
    const [disabled, setDisabled] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const {
        // user,
        phone,
        address,
        city,
        postcode,
        country,
    } = values;

    useEffect(() => {
        getProfile(userInfo().token)
            .then(response => setValues(response.data))
            .catch(err => {

            })
    }, []);


    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisabled(true);
        updateProfile(userInfo().token, values)
            .then(response => {
                if (response.status === 200) {
                    setRedirect(true);

                }
            })
            .catch(err => setDisabled(false))

    }

    const profileForm = () => (<form onSubmit={handleSubmit}>
        {/* <label className="text-muted">UserId:</label>
        <input name="user" value={user} required className="form-control" onChange={handleChange} /> */}
        <label className="text-muted">Phone:</label>
        <input name="phone" value={phone} required className="form-control" onChange={handleChange} />
        <label className="text-muted">Address :</label>
        <input name="address" value={address} required className="form-control" onChange={handleChange} />
        <div className="row">
            <div className="col-4">
                <label className="text-muted">City:</label>
                <input name="city" value={city} required className="form-control" onChange={handleChange} />
            </div>
            <div className="col-4">
                <label className="text-muted">Post Code: </label>
                <input name="postcode" value={postcode} type="number" required className="form-control" onChange={handleChange} />
            </div>
            <div className="col-4">
                <label className="text-muted">Country:</label>
                <input name="country" value={country} required className="form-control" onChange={handleChange} />
                <br />
                <button type="submit" className="btn btn-primary btn-sm float-right" disabled={disabled}>Save and Checkout</button>
            </div>
        </div>
    </form>)
    if (isAuthenticated()) {
        return (<>
            <br />
            <br />
            <br />
            <Layout title="Checkout" description="Complete your order!" className="container mt-5">
                {redirect ? history.push('/checkout') : " "}
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/services">Services</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Address</li>
                    </ol>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card mb-5" style={{ height: 'auto' }}>
                                <div className="card-header h4">Address</div>
                                <div className="card-body">
                                    {profileForm()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>);
    } else {
        return <></>
    }

}

export default withRouter(Address);