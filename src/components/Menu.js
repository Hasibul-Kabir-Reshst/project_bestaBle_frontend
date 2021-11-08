import { Navbar, NavbarBrand, NavItem, Nav, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink, withRouter } from 'react-router-dom';


const Menu = () => {
    return (
        <div className="fixed-top">
            <Navbar color="dark" dark expand="sm">
                <div className="container-fluid">
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
                            {/* <DropdownMenu right>
                                <DropdownItem tag={NavLink} to="/onlinejob">
                                    Online Service
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem tag={NavLink} to="/localjob">
                                    Local Service
                                </DropdownItem>
                            </DropdownMenu> */}
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink to="/signin" className="nav-link">SignIn</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/signup" className="nav-link">SignUp</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
        </div>

    )
}

export default withRouter(Menu);