import { asClasses } from "@/utils";

export type InfoCardProps = {
  title: string;
  value: string | number;
  className?: string;
};

const containerStyle = asClasses([
  "rounded-lg",
  "bg-red-400",
  "bg-gradient-to-br",
  "from-primary",
  "to-secondary",
  "p-2",
]);

function InfoCard({ title, value, className }: InfoCardProps) {
  return (
    <div className={`${containerStyle} ${className}`}>
      <h6 className="text-sm text-white">{title}</h6>
      <p className="text-lg font-medium text-white">{value}</p>
    </div>
  );
}
export default InfoCard;
