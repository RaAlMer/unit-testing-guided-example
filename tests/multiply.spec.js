const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
    test("should multiply two positive integers correctly", () => {
        const result = multiply(5, 2);
        expect(result).toBe(10);
      });
    
    test("should multiply a negative and a positive number correctly", () => {
        const result = multiply(-3, 4);
        expect(result).toBe(-12);
      });

    test("should return 0 if any argument is 0", () => {
        const result = multiply(6, 0);
        expect(result).toBe(0);
      });

  });