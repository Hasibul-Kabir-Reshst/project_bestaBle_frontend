import { Link } from "react-router-dom";
import { API } from "../../utilities/config";
import { isAuthenticated } from "../../utilities/authentication";

const ServiceCard = ({ service, handleAddToCart }) => {
    const titleStyle = {
        display: "block",
        textOverflow: "ellipsis",
        wordWrap: "break-word",
        overflow: "hidden",
        maxHeight: "2em",
        lineHeight: "1em"
    }
    const imgStyle = {
        height: 250,
        objectFit: "cover",
        objectPosition: "0px 0px"
    }

    return (
        <div className="col-md-3 col-sm-4 col-xs-12 mb-3">
            <div className="card">
                <img
                    src={`${API}/service/photo/${service._id}`}
                    alt={service.title}
                    style={imgStyle}
                    className="card-img-top"
                />
                <div className="card-body">
                    <div style={{ minHeight: "3em" }}>
                        <p style={titleStyle}>{service.title}</p>
                    </div>
                    <span style={{ fontSize: 20 }}>&#2547;</span>{service.price}
                    <div style={{ minHeight: "3em" }}>
                        <label className="text-muted">Service Provider:</label>
                        <p style={titleStyle}>{service.seller.name}</p>
                    </div>
                    <Link to={`/service/${service._id}`}>
                        <button className="btn btn-outline-warning btn-sm">Service Details</button>
                    </Link>
                    <Link to="/Saddress">
                        <button className="btn btn-outline-primary btn-sm">Get Service</button>
                    </Link>

                    {/* <button className="btn btn-outline-primary btn-sm" onClick={handleAddToCart} >Add to Cart</button> */}
                    {/* {product.quantity ? <>
                        &nbsp;<button className="btn btn-outline-primary btn-sm" >Add to Cart</button>
                    </> : ""} */}
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;