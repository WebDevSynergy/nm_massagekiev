export const makePaginationElements = (page: number, totalPages: number) => {
  const allPagesArray = [];

  for (let index = 1; index <= totalPages; index++) {
    allPagesArray.push(index);
  }

  const paginationElements: Array<string | number> = [];

  if (allPagesArray.length > 5) {
    //first
    if (page !== 1) {
      paginationElements.push(allPagesArray[0]);
    }
    if (page === 1) {
      paginationElements.push(allPagesArray[0]);
      paginationElements.push(allPagesArray[1]);
      paginationElements.push(allPagesArray[2]);
    } else if (page === 2) {
      paginationElements.push(allPagesArray[1]);
      paginationElements.push(allPagesArray[2]);
    } else if (page === 3) {
      paginationElements.push(allPagesArray[1]);
      paginationElements.push(allPagesArray[2]);
    }

    // //second

    if (page > 3) {
      paginationElements.push('...');
    }

    // center
    if (
      page !== totalPages &&
      page !== totalPages - 1 &&
      page !== totalPages - 2 &&
      page !== 1 &&
      page !== 2 &&
      page !== 3
    ) {
      paginationElements.push(page);
    }

    // penultimate
    if (page < totalPages - 2) {
      paginationElements.push('...');
    }

    //last

    if (page === totalPages) {
      paginationElements.push(allPagesArray[allPagesArray.length - 3]);
      paginationElements.push(allPagesArray[allPagesArray.length - 2]);
      paginationElements.push(allPagesArray[allPagesArray.length - 1]);
    } else if (page === totalPages - 1) {
      paginationElements.push(allPagesArray[allPagesArray.length - 3]);
      paginationElements.push(allPagesArray[allPagesArray.length - 2]);
    } else if (page === totalPages - 2) {
      paginationElements.push(allPagesArray[allPagesArray.length - 3]);
      paginationElements.push(allPagesArray[allPagesArray.length - 2]);
    }

    if (page !== totalPages) {
      paginationElements.push(allPagesArray[allPagesArray.length - 1]);
    }
  } else {
    allPagesArray.map(el => paginationElements.push(el));
  }

  return [paginationElements];
};
