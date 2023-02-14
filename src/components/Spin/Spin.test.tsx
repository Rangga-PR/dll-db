import { screen, render } from "@testing-library/react";
import Spin from "./Spin";

describe("Spin", () => {
  test("should render Spin", () => {
    render(<Spin />);

    expect(screen.getByTestId("spin")).toBeInTheDocument();
  });
});
