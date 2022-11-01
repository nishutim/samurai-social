import styled from 'styled-components';

interface Props {
   minHeight?: string
   height?: string
   maxWidth?: string
   flex?: string
   display?: string
   direction?: string
   justify?: string
   align?: string
}

export const Container = styled.div.attrs<Props>(props => ({
   minHeight: props.height || 'auto',
   height: props.height || 'auto',
   maxWidth: props.maxWidth || '1230px',
   display: props.display || 'block',
   flex: props.flex || '0 1 auto',
   direction: props.direction || 'row',
   justify: props.justify || 'stretch',
   align: props.align || 'stretch',
})) <Props>`
   min-height: ${props => props.minHeight}
   height: ${props => props.height};
   max-width: ${props => props.maxWidth};
   margin: 0 auto;
   padding: 0 15px;
   flex: ${props => props.flex};
   display: ${props => props.display};
   flex-direction: ${props => props.direction};
   justify-content: ${props => props.justify};
   align-items: ${props => props.align};
`;