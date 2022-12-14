import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavBar = styled.nav`
   margin-right: 15px;
   flex: 0 0 180px;
`;

export const NavList = styled.ul`
   margin-bottom: 0;
   padding-left: 0;
   display: flex;
   flex-direction: column;
`;

export const NavListItem = styled.li`
`;

export const StyledNavLink = styled(NavLink)`
   display: block;
   padding: 7px 15px;
   border-radius: 5px;
   font-size: 18px;
   font-weight: 500;
   color: #3A3A3A;
   text-decoration: none;
   transition: all 0.3s ease;

   &:hover {
      color: #3A3A3A;
      background-color: #e9e5e0;
   }
`;