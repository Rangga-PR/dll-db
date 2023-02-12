import { asClasses } from "@/utils";

export type Column = {
  name: string;
  key: string;
};

export type Data = {
  [key: string]: string | number;
};

export type TableProps = {
  columns: Column[];
  dataSource: Data[];
  className?: string;
  handleClick?: (data: Data) => void;
};

const tableStyle = asClasses([
  "w-full",
  "table-fixed",
  "border-collapse",
  "rounded-lg",
  "overflow-hidden",
  "text-sm",
  "sm:text-base",
]);

const theadStyle = asClasses([
  "hidden",
  "sm:table-header-group",
  "overflow-hidden",
  "absolute",
  "sm:relative",
  "bg-primary",
  "text-white",
]);

const trStyle = "bg-primary even:bg-opacity-25 bg-opacity-5 block sm:table-row";
const thStyle = "p-1 font-medium";

const tdStyle = asClasses([
  "text-right",
  "sm:text-center",
  "p-2",
  "sm:py-1",
  "block",
  "sm:table-cell",
  "text-right",
  "before:content-[attr(data-label)]",
  "sm:before:content-[none]",
  "before:float-left",
  "sm:float-none",
  "before:font-medium",
]);

function Table({ columns, dataSource, className, handleClick }: TableProps) {
  const handleRowClick = (data: Data) => {
    handleClick && handleClick(data);
  };

  return (
    <div className={className}>
      <table className={tableStyle}>
        <thead className={theadStyle}>
          <tr className={trStyle}>
            {columns.map(({ name }) => (
              <th key={name} className={thStyle} scope="col">
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((data, idx) => (
            <tr
              key={idx}
              className={`${trStyle} ${handleClick && "cursor-pointer"}`}
              onClick={() => handleRowClick(data)}
            >
              {columns.map(({ name, key }, colIdx) => (
                <td
                  key={`${key} - ${idx}`}
                  className={tdStyle}
                  {...(colIdx === 0 && { scope: "row" })}
                  data-label={name}
                >
                  {data[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
