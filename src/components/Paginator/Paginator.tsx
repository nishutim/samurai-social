import React, { FC } from 'react';
import { Pagination } from 'react-bootstrap';
import getPagesOfPortion from '../../utils/getPagesOfPortion';
import { PaginatorItem, PaginatorNext, PaginatorPrev, StyledPaginator } from './style';

interface Props {
   totalCount: number
   currentPageNum: number
   pageSize?: number
   portionSize?: number
   currentPortionNum: number
   onPageChange: (pageNum: number) => void
   onPrevBtnClick: (pageNum: number) => void
   onNextBtnClick: (pageNum: number) => void
}

const Paginator: FC<Props> = ({
   totalCount,
   currentPageNum,
   pageSize = 10,
   portionSize = 10,
   currentPortionNum,
   onPageChange,
   onPrevBtnClick,
   onNextBtnClick }) => {
   const pagesCount = Math.ceil(totalCount / pageSize) || 1;
   const portionsCount = Math.ceil(pagesCount / portionSize);

   const firstPageOfPortion = currentPortionNum * pageSize - pageSize + 1;
   const lastPageOfProtion = currentPortionNum === portionsCount ? pagesCount : currentPortionNum * pageSize;

   const pages = getPagesOfPortion(firstPageOfPortion, lastPageOfProtion);

   const disablePrevBtn = currentPortionNum === 1;
   const disableNextBtn = currentPortionNum === portionsCount;

   const handlePageChange = (pageNum: number) => {
      if (pageNum === currentPageNum) return;
      onPageChange(pageNum);
   }

   const handlePrevBtnClick = () => {
      onPrevBtnClick(firstPageOfPortion - pageSize);
   }

   const handleNextBtnClick = () => {
      onNextBtnClick(firstPageOfPortion + pageSize);
   }

   return (
      <StyledPaginator>
         <Pagination>
            <PaginatorPrev disabled={disablePrevBtn} onClick={handlePrevBtnClick} />
            {pages.map(p => (
               <PaginatorItem
                  key={p}
                  active={currentPageNum === p}
                  onClick={() => handlePageChange(p)}
               >
                  {p}
               </PaginatorItem>
            ))}
            <PaginatorNext disabled={disableNextBtn} onClick={handleNextBtnClick} />
         </Pagination>
      </StyledPaginator>
   );
}

export default Paginator;