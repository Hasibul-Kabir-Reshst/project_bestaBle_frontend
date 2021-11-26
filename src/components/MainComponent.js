/* Handeling Main Component of frontend part */

import { Switch, Route, Redirect } from 'react-router-dom';
//import ProtectedRoute from './protectedRoutes/privateRoute';
//import ProtectedSellerRoute from './protectedRoutes/protectedSellerRoute';
import Home from './home/Home';
import SignIn from './user/SignIn';
import SignUp from './user/SignUp';
import Dashboard from './user/dasboard';
import sellerDashboard from './seller/sellerDashboard';
import SignOut from './user/SignOut';
import CreateCategory from './seller/createCategory';
import AddService from './seller/AddService';
import ServiceDetails from './explore/ServiceDetails';
import Services from './explore/Services';
import MyServices from './seller/MyServices';
import Address from './order/Address';
import Checkout from './order/Checkout';


const MainComponent = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={SignIn} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/sellerdashboard" exact component={sellerDashboard} />
                <Route path="/createcategory" exact component={CreateCategory} />
                <Route path="/addservice" exact component={AddService} />
                <Route path="/services" exact component={Services} />
                <Route path="/myservices" exact component={MyServices} />
                <Route path="/Saddress" exact component={Address} />
                <Route path="/checkout" exact component={Checkout} />
                <Route path="/service/:id" exact component={ServiceDetails} />
                <Route path="/signout" exact component={SignOut} />

                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default MainComponent;