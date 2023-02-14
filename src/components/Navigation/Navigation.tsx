import NavLinks from "./NavLinks";
import { navMenus } from "./helper";

type NavigationProps = {
  active: string;
};

function Navigation({ active }: NavigationProps) {
  return (
    <nav
      className="flex flex-shrink-0 bg-primary py-1 sm:min-h-screen sm:w-44 sm:flex-col sm:py-8"
      data-testid="navigation"
    >
      <NavLinks navMenus={navMenus} active={active} />
    </nav>
  );
}

export default Navigation;
