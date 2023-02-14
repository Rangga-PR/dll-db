import Navigation from "../Navigation/Navigation";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { Journey } from "../Breadcrumb/Breadcrumb";
import { ReactNode } from "react";

type LayoutProps = {
  navActive: string;
  journeys: Journey[];
  children: ReactNode;
};

function Layout({ navActive, journeys, children }: LayoutProps) {
  return (
    <>
      <Navigation active={navActive} />
      <div className="max-w-screen-lg p-8">
        <Breadcrumb journeys={journeys} />
        {children}
      </div>
    </>
  );
}

export default Layout;
