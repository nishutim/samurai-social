import React, { FC } from "react";
import ContentRouter from "../../router/ContentRouter";
import { StyledContent } from "./style";

const Content: FC = () => {
   return (
      <StyledContent>
         <ContentRouter />
      </StyledContent>
   );
}

export default Content;