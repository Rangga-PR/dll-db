import { screen, render } from "@testing-library/react";
import InfoCard from "./InfoCard";

describe("InfoCard", () => {
  test("should render card's title and value", () => {
    render(<InfoCard title="user" value="rangga" />);
    expect(screen.getByText("user")).toBeInTheDocument();
    expect(screen.getByText("rangga")).toBeInTheDocument();
  });
});
