import React, { FC } from 'react';
import { StyledPagePreloader } from './style';

const PagePreloader: FC = React.memo(() => {
   return (
      <StyledPagePreloader>
         Loading...
      </StyledPagePreloader>
   );
})

export default PagePreloader;