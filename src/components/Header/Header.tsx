import React, { FC } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { logout } from "../../store/reducers/auth/thunk-creators";
import { Button } from "../styled/Button";
import { Container } from "../styled/Container";
import { HeaderBody, StyledHeader } from "./style";

const Header: FC = () => {
   const dispatch = useAppDispatch();

   const handleSignOut = () => {
      dispatch(logout());
   }

   return (
      <StyledHeader>
         <Container>
            <HeaderBody>
               Hello
               <Button onClick={handleSignOut}>Sign out</Button>
            </HeaderBody>
         </Container>
      </StyledHeader>
   );
}

export default Header;