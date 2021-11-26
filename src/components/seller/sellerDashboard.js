import Layout from '../Layout';
import { Link } from 'react-router-dom';
import { userInfo } from '../../utilities/authentication';

const sellerDashboard = () => {
    const { userId, userName, email, role } = userInfo();
    const UserLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">User Links</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="#">Update Profile</Link>
                    </li>

                    <li className="list-group-item">
                        <Link className="nav-link" to="/myservices">My Services</Link>
                    </li>

                    <li className="list-group-item">
                        <Link className="nav-link" to="/createcategory">Create service category</Link>
                    </li>

                    <li className="list-group-item">
                        <Link className="nav-link" to="/addservice">Add Service</Link>
                    </li>
                </ul>
            </div>
        )
    };


    const UserInfo = () => (
        <div className="card mb-5">
            <h3 className="card-header">Profile</h3>
            <ul className="list-group">
                <label className="text-muted ">ID</label>
                <li className="list-group-item">{userId}</li>
                <label className="text-muted ">User Name</label>
                <li className="list-group-item">{userName}</li>
                <label className="text-muted ">Email</label>
                <li className="list-group-item">{email}</li>
                <label className="text-muted ">User Role</label>
                <li className="list-group-item">{role}</li>
            </ul>
        </div>
    );

    return (

        <Layout title="Dashboard" className="container">
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col-sm-3">
                    <UserLinks />
                </div>
                <div className="col-sm-9">
                    <UserInfo />
                </div>
            </div>
        </Layout>
    )
}

export default sellerDashboard;