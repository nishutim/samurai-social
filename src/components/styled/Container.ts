import styled from 'styled-components';

interface Props {
   maxWidth?: string
}

export const Container = styled.div.attrs<Props>(props => ({
   maxWidth: props.maxWidth || "1230px"
})) <Props>`
   max-width: ${props => props.maxWidth};
   margin: 0 auto;
   padding: 0 15px;
`;