import { screen, render } from "@testing-library/react";
import BarChart from "./BarChart";

const data = [
  { name: "test1", value: 3 },
  { name: "test2", value: 1 },
];

describe("BarChart", () => {
  test("should render chart", () => {
    render(<BarChart title="test chart" data={data} />);
    expect(screen.getByText("test1")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("test2")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
