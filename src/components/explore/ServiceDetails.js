import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import { showSuccess, showError } from "../../utilities/messages";
import { API } from "../../utilities/config";
import { getServiceDetails } from "../../api/apiService";
// import { addToCart } from "../../api/apiOrder";
// import { isAuthenticated, userInfo } from "../../utilities/authentication";


const ServiceDetails = (props) => {

    const titleStyle = {
        display: "block",
        textOverflow: "ellipsis",
        wordWrap: "break-word",
        overflow: "hidden",
        maxHeight: "2em",
        lineHeight: "1em"
    }

    const [service, setService] = useState({});
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const id = props.match.params.id;
        getServiceDetails(id)
            .then(response => setService(response.data))
            .catch(err => setError("Failed to load services"))
    })

    // const handleAddToCart = service => () => {
    //     if (isAuthenticated()) {
    //         setError(false);
    //         setSuccess(false);
    //         const user = userInfo();
    //         const cartItem = {
    //             user: user._id,
    //             service: service._id,
    //             price: service.price
    //         }
    //         addToCart(user.token, cartItem)
    //             .then(response => setSuccess(true))
    //             .catch(err => {
    //                 if (err.response) { setError(err.response.data) }
    //                 else setError("Failed to Add Cart");
    //             })
    //     } else {
    //         setSuccess(false);
    //         setError("Please Login First!");
    //     }
    // }

    return (
        <Layout title="Service Details" className="mt-5">
            <br />
            <br />
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/home">Home</Link></li>
                    <li class="breadcrumb-item"><Link to="/services">Services</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Service Details</li>
                    <li class="breadcrumb-item active" aria-current="page">{service.category ? service.category.title : ""}</li>
                </ol>
            </nav>
            <div>
                {showSuccess(success, 'Item Added to Cart!')}
                {showError(error, error)}
            </div>
            <div className="row container">
                <div className="col-6">
                    <img
                        src={`${API}/product/photo/${service._id}`} /**need to check */
                        alt={service.title}
                        width="100%"
                    />
                </div>
                <div className="col-6">
                    <h3>{service.title}</h3>
                    <span style={{ fontSize: 20 }}>&#2547;</span>{service.price}
                    <p>{service.description}</p>
                    <label className="fw-bold">Service provide in:</label>
                    <p style={titleStyle}>{service.deleverytime} days</p>
                    <label className="fw-bold">Service provider:</label>
                    <br />
                    <label className="text-muted">Name</label>
                    <p style={titleStyle}>{service.seller && service.seller.name}</p>
                    <label className="text-muted">Id</label>
                    <p style={titleStyle}>{service.seller && service.seller._id}</p>
                    <button className="btn btn-outline-primary btn-md">Contact To Get Service</button>
                    {/* <button className="btn btn-outline-primary btn-md" >Get Service</button> */}
                </div>
            </div>
        </Layout>
    )
}

export default ServiceDetails;