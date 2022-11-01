import styled from 'styled-components';

interface Props {
   flex?: string
   alignSelf?: string
   direction?: string
   justify?: string
   align?: string
   p?: string
   pt?: string
   pr?: string
   pb?: string
   pl?: string
   m?: string
   mt?: string
   mr?: string
   mb?: string
   ml?: string
}

export const FlexContainer = styled.div.attrs<Props>(props => ({
   flex: props.flex || '0 1 auto',
   alignSelf: props.alignSelf || 'stretch',
   direction: props.direction || 'row',
   justify: props.justify || 'stretch',
   align: props.align || 'stretch',
   pt: props.pt || '0',
   pr: props.pr || '0',
   pb: props.pb || '0',
   pl: props.pl || '0',
   p: props.p || '0',
   mt: props.mt || '0',
   mr: props.mr || '0',
   mb: props.mb || '0',
   ml: props.ml || '0',
   m: props.m || '0'
})) <Props>`
   flex: ${props => props.flex};
   align-self: ${props => props.alignSelf};
   display: flex;
   flex-direction: ${props => props.direction};
   justify-content: ${props => props.justify};
   align-items: ${props => props.align};
   padding-top: ${props => props.pt};
   padding-right: ${props => props.pr};
   padding-bottom: ${props => props.pb};
   padding-left: ${props => props.pl};
   padding: ${props => props.p};
   margin-top: ${props => props.mt};
   margin-right: ${props => props.mr};
   margin-bottom: ${props => props.mb};
   margin-left: ${props => props.ml};
   margin: ${props => props.m};
`;