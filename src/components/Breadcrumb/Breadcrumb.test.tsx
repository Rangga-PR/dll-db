import { screen, render } from "@testing-library/react";
import Breadcrumb from "./Breadcrumb";

const journeys = [
  {
    name: "first-page",
    href: "/first-page",
  },
  {
    name: "second-page",
    href: "/second-page",
  },
];

describe("Breadcrumb", () => {
  test("should render journeys", () => {
    render(<Breadcrumb journeys={journeys} />);

    expect(screen.getByText("first-page")).toBeInTheDocument();
    expect(screen.getByText("first-page")).not.toHaveAttribute(
      "aria-current",
      "page"
    );

    expect(screen.getByText("/ second-page")).toBeInTheDocument();
    expect(screen.getByText("/ second-page")).toHaveAttribute(
      "aria-current",
      "page"
    );
  });

  test("should have correct ARIA attribute", () => {
    render(<Breadcrumb journeys={journeys} />);

    expect(screen.getByText("first-page")).not.toHaveAttribute(
      "aria-current",
      "page"
    );

    expect(screen.getByText("/ second-page")).toHaveAttribute(
      "aria-current",
      "page"
    );
  });
});
