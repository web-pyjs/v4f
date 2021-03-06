import { boolean, truthy, falsy } from "../rules/boolean";

/**
 * Test boolean rule with multiple values
 * */

describe("Validate Boolean Rule", () => {
  const values = {
    valid: [true, false],
    invalid: ["", null, 3, [3, 4], undefined]
  };
  const rule = boolean;
  values.valid.forEach(v => {
    it(`Value : ${v} , should be true`, () => {
      expect(rule(v)).toBe(true);
    });
  });
  values.invalid.forEach(v => {
    it(`Value : ${v} , should be false`, () => {
      expect(rule(v)).toBe(false);
    });
  });
});
describe("Validate Truthy Rule", () => {
  const values = { valid: [true], invalid: [false] };
  const rule = truthy;
  values.valid.forEach(v => {
    it(`Value : ${v} , should be true`, () => {
      expect(rule(v)).toBe(true);
    });
  });
  values.invalid.forEach(v => {
    it(`Value : ${v} , should be false`, () => {
      expect(rule(v)).toBe(false);
    });
  });
});

describe("Validate Falsy Rule", () => {
  const values = { valid: [false], invalid: [true] };
  const rule = falsy;
  values.valid.forEach(v => {
    it(`Value : ${v} , should be true`, () => {
      expect(rule(v)).toBe(true);
    });
  });
  values.invalid.forEach(v => {
    it(`Value : ${v} , should be false`, () => {
      expect(rule(v)).toBe(false);
    });
  });
});
