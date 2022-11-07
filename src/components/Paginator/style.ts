import { Pagination } from "react-bootstrap";
import styled from "styled-components";

export const StyledPaginator = styled.div`
   display: flex;
   justify-content: center;
`;

export const PaginatorItem = styled(Pagination.Item)`
   & .page-link {
      color: ${props => props.theme.colors.$orange};
   }

   &.active .page-link {
      color: #fff;
      background-color: ${props => props.theme.colors.$orange};
      border-color: ${props => props.theme.colors.$orange};
   }
`;

export const PaginatorPrev = styled(Pagination.Prev)`
   & .page-link {
      color: ${props => props.theme.colors.$orange};
   }

   &.disabled .page-link {
      color: ${props => props.theme.colors.$gray}
   }
`;

export const PaginatorNext = styled(Pagination.Next)`
   & .page-link {
      color: ${props => props.theme.colors.$orange};
   }

   &.disabled .page-link {
      color: ${props => props.theme.colors.$gray}
   }
`;