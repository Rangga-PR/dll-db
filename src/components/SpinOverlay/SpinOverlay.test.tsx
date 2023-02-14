import { screen, render } from "@testing-library/react";
import SpinOverlay from "./SpinOverlay";

describe("Spin Overlay", () => {
  test("should render ", () => {
    render(<SpinOverlay />);

    expect(screen.getByTestId("spin-overlay")).toBeInTheDocument();
  });

  test("should disable body scroll", () => {
    render(<SpinOverlay />);

    expect(document.body).toHaveStyle("overflow-y: hidden");
  });
});
