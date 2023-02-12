import { asClasses } from ".";

describe("asClasses", () => {
  test("should generate classes string from array of classes", () => {
    expect(asClasses(["mx-1", "px-1"])).toBe("mx-1 px-1");
  });
});
