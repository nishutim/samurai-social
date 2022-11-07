import React, { FC } from "react";
import { NavList, NavListItem, StyledNavBar, StyledNavLink } from "./style";

interface Props { }

const NavBar: FC<Props> = (props) => {
   return (
      <StyledNavBar>
         <NavList>
            <NavListItem><StyledNavLink to='/profile'>Profile</StyledNavLink></NavListItem>
            <NavListItem><StyledNavLink to='/users'>Users</StyledNavLink></NavListItem>
            <NavListItem><StyledNavLink to='/chat'>Chat</StyledNavLink></NavListItem>
         </NavList>
      </StyledNavBar>
   );
}

export default NavBar;