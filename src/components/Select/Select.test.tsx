import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select from "./Select";

const options = [
  { key: "test1", value: "test1" },
  { key: "test2", value: "test2" },
];

describe("Select", () => {
  test("should render loading", () => {
    render(<Select loading options={[]} />);

    expect(screen.getByTestId("spin")).toBeInTheDocument();
  });

  test("should render options", () => {
    render(<Select options={options} data-testid="select" />);

    expect(screen.getByText("test1")).toBeInTheDocument();
    expect(screen.getByText("test2")).toBeInTheDocument();
  });

  test("should be able to select value", async () => {
    const user = userEvent.setup();
    render(<Select options={options} />);

    const selectElm = screen.getByTestId("select");

    expect(selectElm).toHaveValue("test1");
    await user.click(selectElm);
    await user.selectOptions(selectElm, screen.getByText("test2"));
    expect(selectElm).toHaveValue("test2");
  });
});
