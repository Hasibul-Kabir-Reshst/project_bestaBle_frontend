/*middlewire to handle user authentication */
import jwt_decode from 'jwt-decode';

export const authenticate = (token, cb) => {
    localStorage.setItem('jwt', JSON.stringify(token));
    cb();
}

export const isAuthenticated = () => {
    console.log(new Date());
    if (localStorage.getItem('jwt')) {
        const jwt = JSON.parse(localStorage.getItem('jwt'));
        const { exp } = jwt_decode(jwt);
        if ((new Date()).getTime() < exp * 1000) {
            return true;
        } else {
            localStorage.removeItem('jwt');
            return false;
        }

    } else return false;
}

export const userInfo = () => {
    const jwt = JSON.parse(localStorage.getItem('jwt'));
    const decoded = jwt_decode(jwt);
    return { ...decoded, token: jwt };
}

export const logout = () => {
    localStorage.removeItem('jwt');

}