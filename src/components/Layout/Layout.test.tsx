import { screen, render } from "@testing-library/react";
import Layout from "./Layout";

const journeys = [
  {
    name: "first-page",
    href: "/first-page",
  },
];

describe("Layout", () => {
  test("should render children with navigation and breadcrumb", () => {
    render(
      <Layout navActive="products" journeys={journeys}>
        <p>test</p>
      </Layout>
    );

    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByText("first-page")).toBeInTheDocument();
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
  });
});
