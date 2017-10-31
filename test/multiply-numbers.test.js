import { multiplyNumbers } from '../src/multiply-numbers';

describe('multiplu numbers', function () {
    test('should work', function () {
        expect(multiplyNumbers(2, 3)).toBe(6);
    });
});
