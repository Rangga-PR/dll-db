import Link from "next/link";

export type Journey = {
  name: string;
  href: string;
};

export type BreadcrumbProps = {
  journeys: Journey[];
};

function Breadcrumb({ journeys }: BreadcrumbProps) {
  const journeysLen = journeys.length - 1;

  return (
    <nav>
      <ul className="flex">
        {journeys.map(({ name, href }, idx) => (
          <Link key={name} href={href}>
            <li
              className="mr-1 text-primary aria-current-page:text-secondary"
              {...(idx === journeysLen && { "aria-current": "page" })}
            >
              {`${idx > 0 ? "/" : ""} ${name}`}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Breadcrumb;
