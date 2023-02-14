import { asClasses } from "@/utils";
import Link from "next/link";

export type NavLink = {
  id: string;
  name: string;
  icon: string;
  href: string;
};

export type NavLinksProps = {
  active: string;
  navMenus: NavLink[];
};

const linkStyle = asClasses([
  "flex",
  "text-md",
  "text-white",
  "px-3",
  "py-1",
  "mx-1",
  "rounded-lg",
  "aria-current:text-black",
  "aria-current:bg-white",
  "sm:mx-0",
  "sm:mb-2",
  "sm:rounded-tl-lg",
  "sm:rounded-bl-lg",
  "sm:rounded-tr-none",
  "sm:rounded-br-none",
]);

function NavLinks({ active, navMenus }: NavLinksProps) {
  return (
    <ul className="ml-4 flex py-2 sm:block sm:py-0" data-testid="navlinks">
      {navMenus.map(({ id, name, icon, href }) => (
        <Link key={id} href={href}>
          <li aria-current={active === id} className={linkStyle}>
            <span className="mr-2 font-icon">{icon}</span>
            {name}
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default NavLinks;
