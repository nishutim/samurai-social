const getPagesOfPortion = (firstPageOfPortion: number, lastPageOfPortion: number) => {
   let pages: number[] = [];
   for (let i = firstPageOfPortion; i <= lastPageOfPortion; i++) {
      pages.push(i);
   }
   return pages;
}

export default getPagesOfPortion;