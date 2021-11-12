import { Redirect } from "react-router-dom";
import { logout } from "../../utilities/authentication";

const SignOut = () => {
    logout();
    return (
        <Redirect to="/" />
    )
}



export default SignOut;