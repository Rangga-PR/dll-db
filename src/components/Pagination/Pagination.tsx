import { createPageItems, PageItem } from "./helper";
import { useMemo } from "react";
import { asClasses } from "@/utils";

export type PaginationProps = {
  total: number;
  size: number;
  page: number;
  className?: string;
  handleChange: (page: number) => void;
};

const pageItemStyle = asClasses([
  "w-6",
  "cursor-pointer",
  "rounded-lg",
  "text-center",
  "aria-current:bg-primary",
  "aria-current:text-white",
]);

function Pagination({
  total,
  size,
  page,
  className,
  handleChange,
}: PaginationProps) {
  const pageCount = Math.ceil(total / size);
  const pageItems = useMemo(
    () => createPageItems(page, pageCount),
    [page, pageCount]
  );

  const handlePrev = () => {
    if (page <= 1) return;
    handleChange(page - 1);
  };

  const handleNext = () => {
    if (page >= pageCount) return;
    handleChange(page + 1);
  };

  const handleClick = (val: PageItem) => {
    if (typeof val !== "number") return;
    handleChange(val);
  };

  return (
    <ul className={`flex rounded-lg bg-white p-1 shadow-md ${className}`}>
      <li
        data-testid="prev"
        className={`font-icon ${pageItemStyle}`}
        onClick={handlePrev}
      >
        navigate_before
      </li>
      {pageItems?.map((item, idx) => (
        <li
          key={idx}
          aria-current={page === item}
          className={pageItemStyle}
          onClick={() => handleClick(item)}
        >
          {item}
        </li>
      ))}
      <li
        data-testid="next"
        className={`font-icon ${pageItemStyle}`}
        onClick={handleNext}
      >
        navigate_next
      </li>
    </ul>
  );
}

export default Pagination;
