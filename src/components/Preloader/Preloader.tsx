import React, { FC } from "react";
import { StyledPreloader } from "./style";

const Preloader: FC = () => {
   return (
      <StyledPreloader>
         Loading...
      </StyledPreloader>
   );
}

export default Preloader;