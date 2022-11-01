import React, { FC } from "react";
import { StyledNavBar, StyledNavLink } from "./style";

interface Props { }

const NavBar: FC<Props> = (props) => {
   return (
      <StyledNavBar>
         <ul>
            <li><StyledNavLink to='/profile'>Profile</StyledNavLink></li>
            <li><StyledNavLink to='/users'>Users</StyledNavLink></li>
            <li><StyledNavLink to='/chat'>Chat</StyledNavLink></li>
         </ul>
      </StyledNavBar>
   );
}

export default NavBar;