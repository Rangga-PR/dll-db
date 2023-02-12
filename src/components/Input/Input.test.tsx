import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("Input", () => {
  test("should able to input value", async () => {
    const user = userEvent.setup();
    render(<Input data-testid="test-input" />);

    const inputElm = screen.getByTestId("test-input");

    await user.click(inputElm);
    await user.keyboard("test");
    expect(inputElm).toHaveValue("test");
  });
});
