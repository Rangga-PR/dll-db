import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Table from "./Table";

const cols = [{ name: "User", key: "user" }];
const dataSource = [{ id: 1, user: "rangga" }];

describe("Table", () => {
  test("should render table with data", () => {
    render(<Table columns={cols} dataSource={dataSource} />);

    expect(screen.getByText("User")).toBeInTheDocument();
    expect(screen.getByText("rangga")).toBeInTheDocument();
  });

  test("should be able click row", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <Table columns={cols} dataSource={dataSource} handleClick={handleClick} />
    );

    await user.click(screen.getByText("rangga"));

    expect(handleClick).toBeCalledTimes(1);
  });
});
