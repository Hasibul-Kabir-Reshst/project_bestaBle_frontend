/* Handeling Main Component of frontend part */

import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './home/Home';
import SignIn from './user/SignIn';
import SignUp from './user/SignUp';

const MainComponent = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={SignIn} />
                <Route path="/signup" exact component={SignUp} />
            </Switch>
        </div>
    )
}

export default MainComponent;