// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { getProfile } from "../../api/apiOrder";
// import { getServiceDetails, getServices } from "../../api/apiService";
// import { userInfo } from "../../utilities/authentication";
// import Layout from "../Layout";

// const Checkout = () => {
//     const [service, setServiceItem] = useState({});
//     const [values, setValues] = useState({
//         phone: '',
//         address: '',
//         city: '',
//         postcode: '',
//         country: ''
//     });

//     const {
//         phone,
//         address,
//         city,
//         postcode,
//         country
//     } = values;

//     const loadItem = () => {
//         getServiceDetails(userInfo().token)
//             .then(response => setServiceItem(response.data))
//             .catch((err => console.log(err)));
//     }

//     useEffect(() => {
//         getProfile(userInfo().token)
//             .then(response => setValues(response.data))
//             .catch(err => { })
//         loadItem();
//     }, []);


//     const shippinDetails = () => (
//         <>
//             To,
//             <br /> <b>{userInfo().userName}</b>
//             <br /> Phone: {phone}
//             <br /> address: {address}
//             <br /> {city}-{postcode}, {country}
//         </>
//     )

//     return (<>
//         <Layout title="Checkout" description="Complete your order!" className="container mt-5">
//             <br />
//             <br />
//             <nav aria-label="breadcrumb">
//                 <ol class="breadcrumb">
//                     <li class="breadcrumb-item"><Link href="#">Order</Link></li>
//                     <li class="breadcrumb-item"><Link href="#">Cart</Link></li>
//                     <li class="breadcrumb-item"><Link href="#">Shipping Address</Link></li>
//                     <li class="breadcrumb-item active" aria-current="page">Checkout</li>
//                 </ol>
//             </nav>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-8">
//                         <div className="card mb-5" style={{ height: 'auto' }}>
//                             <div className="card-header">Shipping Details</div>
//                             <div className="card-body">
//                                 {shippinDetails()}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-md-4">
//                         <div className="card" style={{ height: 'auto' }}>
//                             <div className="card-body">
//                                 <ul className="list-group list-group-flush">
//                                     <span className="float-right"><b>{service.title}</b></span>
//                                 </ul>
//                             </div>
//                             <div className="card-footer">
//                                 <span className="float-left"><b>Price</b></span>
//                                 <span className="float-right"><b>৳ {service.price}</b></span>
//                             </div>
//                         </div>
//                         <br />
//                         <p><Link className="btn btn-warning btn-md" to="/payment">Make Payment</Link></p>
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     </>);
// }

// export default Checkout;