import { screen, render } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Pagination from "./Pagination";
import { createPageItems, DOTS } from "./helper";

describe("createPageItems", () => {
  test("should generate pagination's page item array", () => {
    expect(createPageItems(1, 10)).toEqual([1, 2, 3, 4, DOTS, 10]);
    expect(createPageItems(10, 10)).toEqual([1, DOTS, 7, 8, 9, 10]);
    expect(createPageItems(5, 10)).toEqual([1, DOTS, 4, 5, 6, DOTS, 10]);
  });
});

describe("Pagination", () => {
  test("should render pagination", () => {
    const handleChange = vi.fn();
    render(
      <Pagination page={1} size={10} total={30} handleChange={handleChange} />
    );

    expect(screen.getByTestId("prev")).toBeVisible();
    expect(screen.getByText("1")).toBeVisible();
    expect(screen.getByText("2")).toBeVisible();
    expect(screen.getByText("3")).toBeVisible();
    expect(screen.getByTestId("next")).toBeVisible();
  });

  test("should be able to be clicked", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <Pagination page={1} size={10} total={30} handleChange={handleChange} />
    );

    await user.click(screen.getByText("1"));
    await user.click(screen.getByText("2"));
    await user.click(screen.getByText("3"));
    await user.click(screen.getByTestId("next"));

    expect(handleChange).toBeCalledTimes(4);
  });

  test("should not be able to click prev on first page", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <Pagination page={1} size={10} total={30} handleChange={handleChange} />
    );

    await user.click(screen.getByTestId("prev"));
    expect(handleChange).toBeCalledTimes(0);
  });

  test("should not be able to click next on last page", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <Pagination page={3} size={10} total={30} handleChange={handleChange} />
    );

    await user.click(screen.getByTestId("next"));
    expect(handleChange).toBeCalledTimes(0);
  });

  test("should not be able to click dots", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <Pagination page={1} size={10} total={100} handleChange={handleChange} />
    );

    await user.click(screen.getByText(DOTS));
    expect(handleChange).toBeCalledTimes(0);
  });
});
