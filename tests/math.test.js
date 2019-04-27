const {sum} = require('../math');

describe('Sum Feature', () => {
    test('should calculate the sum of two numbers', () => {
        const result = sum(2, 2);
        expect(result).toBe(4);
        expect(result).toBeGreaterThan(3);
        expect(result).toBeGreaterThanOrEqual(3);
        expect(result).toBeLessThan(5);
        expect(result).toBeLessThanOrEqual(5);
        expect(result).toEqual(4);
    });

    test('should calculate the sum of floating point numbers', () => {
        const result = sum(0.1, 0.3);
        expect(result).toBeCloseTo(0.4);
    });
});