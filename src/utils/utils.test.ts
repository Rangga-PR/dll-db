import { asClasses, range } from ".";

describe("asClasses", () => {
  test("should generate classes string from array of classes", () => {
    expect(asClasses(["mx-1", "px-1"])).toBe("mx-1 px-1");
  });
});

describe("range", () => {
  test("should generate array of number within range", () => {
    expect(range(1, 4)).toEqual([1, 2, 3, 4]);
  });
});
