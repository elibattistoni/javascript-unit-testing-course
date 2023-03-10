import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

//% 1. test the main thing that the function should do

it("should transform a string number to a number of type number", () => {
  const input = "1";

  const result = transformToNumber(input);

  expect(result).toBeTypeOf("number");

  //| NB typically, it is a good idea if one test tests one thing, but there are scenarios where multiple expectations can make sense
  //| and if you add multiple expectations, all of them have to return true for the overall test to pass
  //| (technically, expect() does not return true or false; instead it throws an error if the expectation is not met;
  //| the test runner treats thrown errors a failed tests and tests that do not throw errors as passed)
});

it("should transform a string number to a number of type number", () => {
  const input = "1";

  const result = transformToNumber(input);

  expect(result).toBe(+input);
});

//% 2. test invalid things

it("should yield NaN for non-transformable values", () => {
  const input = "invalid";
  const input2 = {};

  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);

  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});
