import React, { FC } from "react";
import { Button } from "../styled/Button";
import { Container } from "../styled/Container";
import { HeaderBody, StyledHeader } from "./style";

interface Props {
   auth: boolean
   onBtnClick: () => void
}

const Header: FC<Props> = ({ auth, onBtnClick }) => {
   return (
      <StyledHeader>
         <Container>
            <HeaderBody>
               Hello
               <Button onClick={onBtnClick}>
                  {auth ? 'Sign out' : 'Sign in'}
               </Button>
            </HeaderBody>
         </Container>
      </StyledHeader>
   );
}

export default Header;