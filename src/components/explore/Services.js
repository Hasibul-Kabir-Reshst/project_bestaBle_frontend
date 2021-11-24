import { useState, useEffect } from "react";
import Layout from "../Layout";
import ServiceCard from "./Card";
import { showSuccess, showError } from "../../utilities/messages";
import { getServices, getFilteredServices, getCategories } from "../../api/apiService";
import SelectCategory from "./SelectCategory";
// import { isAuthenticated, userInfo } from "../../utilities/authentication";
// import { addToCart } from "../../api/apiOrder";

const Services = () => {

    const [services, setServices] = useState([]);
    const [categories, setCategories] = useState([]);
    const [limit, setLimit] = useState(20);
    const [skip, setSkip] = useState(0);
    const [order, setOrder] = useState('desc');
    const [sortBy, setSortBy] = useState('price');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [filters, setFilters] = useState({
        category: []
    });

    useEffect(() => {
        getServices('price', order, limit)
            .then(response => setServices(response.data))
            .catch(err => setError("Failed to load Services!"));

        getCategories()
            .then(response => setCategories(response.data))
            .catch(err => setError("Failed to load categories!"));
    }, [])

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
    //                 if (err.response) setError(err.response.data);
    //                 else setError("Failed to Add Cart");
    //             })
    //     } else {
    //         setSuccess(false);
    //         setError("Please Login First!");
    //     }
    // }

    const handleFilters = (myfilters, filterBy) => {
        const newFilters = { ...filters }
        if (filterBy === 'category') {
            newFilters[filterBy] = myfilters
        }
        setFilters(newFilters);
        getFilteredServices(skip, limit, newFilters, order)
            .then(response => setServices(response.data))
            .catch(err => setError("Failed to load services!"))
    }

    const showFilters = () => {
        return (
            <>
                <div className="row">
                    <div className="col-sm-2">
                        <SelectCategory categories={categories} handleFilters={myfilters => handleFilters(myfilters, 'category')} />
                    </div>
                </div>
            </>
        )
    }

    return (
        <Layout title="Explore Services" className="container-fluid mt-5">
            <br />
            <br />
            {showFilters()}
            <br />
            <div style={{ width: "100%" }} >
                {showError(error, error)}
                {showSuccess(success, "Added to cart!")}
            </div>
            <div className="row">
                {services && services.map(service => <ServiceCard service={service} key={service._id} />)}
            </div>
        </Layout>
    )
}

export default Services;