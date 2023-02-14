import { asClasses } from "@/utils";
import { Fragment } from "react";

export type Data = {
  name: string;
  value: number;
};

export type BarChartProps = {
  title?: string;
  data: Data[];
  className?: string;
};

const barStyle = asClasses([
  "mb-4",
  "bg-primary",
  "bg-gradient-to-bl",
  "from-primary",
  "to-secondary",
  "p-2",
  "text-white",
]);

function BarChart({ title, data, className }: BarChartProps) {
  return (
    <dl
      className={`flex flex-col border-l-4 border-b-4 border-primary ${className}`}
    >
      {title && <p className="mb-8 self-center text-2xl font-bold">{title}</p>}
      {data.map(({ name, value }) => (
        <Fragment key={name}>
          <dt className="ml-2">{name}</dt>
          <dd className={barStyle} style={{ width: `${(value / 10) * 100}%` }}>
            {value}
          </dd>
        </Fragment>
      ))}
    </dl>
  );
}

export default BarChart;
