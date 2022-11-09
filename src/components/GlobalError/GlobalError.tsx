import React, { FC } from "react";
import { StyledGlobalError } from "./style";

interface Props {
   error: string
   onPage?: boolean
}

const GlobalError: FC<Props> = React.memo(({ error, ...props }) => {
   return <StyledGlobalError {...props}>{error}</StyledGlobalError>
})

export default GlobalError;