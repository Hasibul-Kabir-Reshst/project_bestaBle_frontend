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


const MainComponent = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={SignIn} />
                <Route path="/signup" exact component={SignUp} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/sellerdashboard" exact component={sellerDashboard} />
                {/* <protectedSellerRoute path="/Seller/dashboard">
                    <sellerDashboard />
                </protectedSellerRoute> */}

                {/* <ProtectedRoute path="/Buyer/dashboard">
                    <Dashboard />
                </ProtectedRoute> */}
                <Route path="/signout" exact component={SignOut} />

                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default MainComponent;