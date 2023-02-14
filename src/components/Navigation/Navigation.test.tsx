import { screen, render } from "@testing-library/react";
import Navigation from "./Navigation";
import NavLinks from "./NavLinks";

export const navMenus = [
  {
    id: "products",
    name: "Products",
    icon: "inventory_2",
    href: "#",
  },
  {
    id: "carts",
    name: "Carts",
    icon: "shopping_cart",
    href: "#",
  },
];

describe("NavLinks", () => {
  test("should render nav menu links", () => {
    render(<NavLinks navMenus={navMenus} active="products" />);

    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("inventory_2")).toBeInTheDocument();
    expect(screen.getByText("Products")).toHaveAttribute(
      "aria-current",
      "true"
    );

    expect(screen.getByText("Carts")).toBeInTheDocument();
    expect(screen.getByText("shopping_cart")).toBeInTheDocument();
    expect(screen.getByText("Carts")).not.toHaveAttribute(
      "aria-current",
      "true"
    );
  });
});

describe("Navigation", () => {
  test("should render navigation content", () => {
    render(<Navigation />);

    expect(screen.getByTestId("navlinks")).toBeInTheDocument();
  });
});
