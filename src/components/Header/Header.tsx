import React, { FC, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { HeaderBody, StyledHeader } from "./style";
import { logout } from "../../store/reducers/auth/thunk-creators";
import { Container } from "../styled/Container";
import { Button } from "../styled/Button";
import AuthUser from "../AuthUser/AuthUser";

const Header: FC = () => {
   const [disableBtn, setDisableBtn] = useState(false);

   const dispatch = useAppDispatch();

   const handleSignOut = async () => {
      setDisableBtn(true);
      await dispatch(logout());
      setDisableBtn(false);
   }

   return (
      <StyledHeader>
         <Container>
            <HeaderBody>
               <AuthUser />
               <Button disabled={disableBtn} onClick={handleSignOut}>Sign out</Button>
            </HeaderBody>
         </Container>
      </StyledHeader>
   );
}

export default Header;