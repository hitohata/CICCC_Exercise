/**
 * Challenge: Integral Reversal
 * integralReversalFn is a function that takes a number and returns the integral
 * reversal of that number. The integral reversal of a number is the number with
 * its digits reversed.
 *
 * Test Output:
 * console.log(integralReversalFn(123)) // 321
 * console.log(integralReversalFn(1234)) // 4321
 * console.log(integralReversalFn(100)) // 1
 * console.log(integralReversalFn(-123)) // -321
 *
 * Positive Test Cases:
 * 1. Number with single digit should return the number
 * 2. Number with multiple digits should return the number with its digits reversed
 * 3. Number with trailing zeros should return the number with its digits reversed, excluding the trailing zeros
 * 4. Negative number should return the negative number with its digits reversed
 */

// The implementation
export function integralReversalFn(num: number): number {

    const plusOrMinus = num < 0 ? -1 : 1;

    const reversedNumber = Math.abs(num).toString().split("").map((_, i, arr) => arr[arr.length - 1 - i]).join("");

    return Number(reversedNumber) * plusOrMinus

}











// in-source test suites
if (import.meta.vitest) {
    const { describe, expect, test } = import.meta.vitest

    describe('integralReversalFn', () => {
        // Test case 1: Number with single digit should return the number
        test('should return the number for a number with single digit', () => {
            expect(integralReversalFn(1)).toBe(1);
        });

        // Test case 2: Number with multiple digits should return the number with its digits reversed
        test('should return the number with its digits reversed for a number with multiple digits', () => {
            expect(integralReversalFn(123)).toBe(321);
        });

        // Test case 3: Number with trailing zeros should return the number with its digits reversed, excluding the trailing zeros
        test('should return the number with its digits reversed, excluding the trailing zeros for a number with trailing zeros', () => {
            expect(integralReversalFn(100)).toBe(1);
        });

        // Test case 4: Negative number should return the negative number with its digits reversed
        test('should return the negative number with its digits reversed for a negative number', () => {
            expect(integralReversalFn(-123)).toBe(-321);
        });
    })
}
