import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import { showSuccess, showError } from "../../utilities/messages";
import { getServices, getCategories } from "../../api/apiService";
import MyServiceCard from "./MyCard";
import { userInfo } from "../../utilities/authentication";

const MyServices = () => {

    const [services, setServices] = useState([]);
    const [categories, setCategories] = useState([]);
    const [limit, setLimit] = useState(20);
    const [skip, setSkip] = useState(0);
    const [order, setOrder] = useState('desc');
    const [sortBy, setSortBy] = useState('price');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        getServices('price', order, limit)
            .then(response => setServices(response.data))
            .catch(err => setError("Failed to load Services!"));

        getCategories()
            .then(response => setCategories(response.data))
            .catch(err => setError("Failed to load categories!"));
    }, []);


    return (

        <Layout title="MyServices" className="container-fluid mt-5">
            <br />
            <br />
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/sellerdashboard">Dashboard</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">MyServices</li>
                </ol>
            </nav>
            <div style={{ width: "100%" }} >
                {showError(error, error)}
                {showSuccess(success, "Added to cart!")}
            </div>
            <div className="row">
                {services && services.map(service => service.seller._id === userInfo().userId ? <MyServiceCard service={service} key={service._id} /> : '')}
            </div>
        </Layout>
    )
}

export default MyServices;