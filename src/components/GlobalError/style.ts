import styled from "styled-components";
import { StyledPreloader } from "../Preloader/style";

interface StyledGlobalErrorProps {
   onPage?: boolean
}

export const StyledGlobalError = styled(StyledPreloader) <StyledGlobalErrorProps>`
   flex: ${props => props.onPage ? '1 1 auto' : 'auto'};
   min-height: ${props => props.onPage && 'auto'};
   background-color: ${props => props.onPage ? 'transparent' : props.theme.colors.$lightGrayBG};
`;