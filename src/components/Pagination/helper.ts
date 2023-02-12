import { range } from "@/utils";

export const DOTS = "...";

export type PageItem = string | number;

export const createPageItems = (
  page: number,
  pageCount: number
): PageItem[] => {
  const TOTAL_PAGE_ITEMS = 5;
  if (TOTAL_PAGE_ITEMS >= pageCount) {
    return range(1, pageCount);
  }

  const leftSiblingIdx = Math.max(page - 1, 1);
  const rightSiblingIdx = Math.min(page + 1, pageCount);
  const showLeftDots = leftSiblingIdx > 2;
  const showRightDots = rightSiblingIdx < pageCount - 2;
  const firsPageIdx = 1;
  const lastPageIdx = pageCount;

  if (!showLeftDots && showRightDots) {
    const leftItemCount = TOTAL_PAGE_ITEMS - 1;
    const leftRange = range(1, leftItemCount);
    return [...leftRange, DOTS, pageCount];
  }

  if (showLeftDots && !showRightDots) {
    const rightItemCount = TOTAL_PAGE_ITEMS - 2;
    const rightRange = range(pageCount - rightItemCount, pageCount);
    return [firsPageIdx, DOTS, ...rightRange];
  }

  if (showLeftDots && showRightDots) {
    const midRange = range(leftSiblingIdx, rightSiblingIdx);
    return [firsPageIdx, DOTS, ...midRange, DOTS, lastPageIdx];
  }

  return [];
};
