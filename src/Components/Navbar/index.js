import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElement";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/Index" activeStyle>
                        
                    </NavLink>
                    <NavLink to="/About" activeStyle>
                        
                    </NavLink>
                    <NavLink to="/Beneficiary" activeStyle>
                  
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;