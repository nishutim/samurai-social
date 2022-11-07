import styled from 'styled-components';

interface Props {
   alignSelf?: string
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

export const Button = styled.button.attrs<Props>(props => ({
   alignSelf: props.alignSelf || 'stretch',
   p: props.p || '5px 15px',
   pt: props.pt || '0',
   pr: props.pr || '0',
   pb: props.pb || '0',
   pl: props.pl || '0',
   m: props.m || '0',
   mt: props.mt || '0',
   mr: props.mr || '0',
   mb: props.mb || '0',
   ml: props.ml || '0'
})) <Props>`
   align-self: ${props => props.alignSelf};
   padding-top: ${props => props.pt};
   padding-right: ${props => props.pr};
   padding-bottom: ${props => props.pb};
   padding-left: ${props => props.pl};
   padding: ${props => props.p};
   margin: ${props => props.m};
   margin-top: ${props => props.mt};
   margin-right: ${props => props.mr};
   margin-bottom: ${props => props.mb};
   margin-left: ${props => props.ml};
   border-radius: 5px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #E89F71;
   font-size: 18px;
   color: white;
   transition: all 0.3s ease;

   &:hover {
      background-color: #c48864;
   }

   &:disabled {
      background-color: ${props => props.theme.colors.$gray};
   }
`;