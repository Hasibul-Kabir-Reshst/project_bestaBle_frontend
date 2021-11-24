import { Navbar, NavbarBrand, NavItem, Nav, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink, withRouter } from 'react-router-dom';
import { isAuthenticated, userInfo } from '../utilities/authentication';


const Menu = () => {
    return (
        <div className="fixed-top">
            <Navbar color="dark" dark expand="sm">
                <div className="container">
                    <NavbarBrand href="/home">
                        <img src="assets/Logo3.png" width="80px" height="40px" />
                    </NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </NavItem>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Explore
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem tag={NavLink} to="/services">
                                    Service
                                </DropdownItem>

                                {/* <DropdownItem divider />
                                <DropdownItem tag={NavLink} to="/localjob">
                                    Local Service
                                </DropdownItem> */}
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        {!isAuthenticated() && (<>
                            <NavItem>
                                <NavLink to="/signin" className="nav-link">SignIn</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/signup" className="nav-link">SignUp</NavLink>
                            </NavItem>
                        </>)}

                        {isAuthenticated() && (<>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <img src="assets/avatar.png" class="rounded-circle" alt="profile" width="30px" />
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem tag={NavLink} to="/">
                                        Profile
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    {userInfo().role == 'Seller' ? (<> <DropdownItem tag={NavLink} to="/sellerdashboard">
                                        Dashboard
                                    </DropdownItem></>) : (<> <DropdownItem tag={NavLink} to="/dashboard">
                                        Dashboard
                                    </DropdownItem></>)}
                                    <DropdownItem divider />
                                    <DropdownItem tag={NavLink} to="/signout">
                                        SignOut
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </>)}

                    </Nav>
                </div>
            </Navbar>
        </div>

    )
}

export default withRouter(Menu);