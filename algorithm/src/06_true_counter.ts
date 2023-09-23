/**
 * Challenge: True Counter
 * trueCounterFn is a function that takes an array of booleans. Write the logic
 * to return the number of true values in the array.
 *
 * Test Output:
 * console.log(trueCounter([])) // 0
 * console.log(trueCounter([true, true, true])) // 3
 * console.log(trueCounter([false, false, false])) // 0
 * console.log(trueCounter([true, false, true])) // 2
 *
 * Positive Test Cases:
 * 1. Empty array should return 0
 * 2. Array with all true values should return the length of the array
 * 3. Array with all false values should return 0
 * 4. Array with mixed true and false values should return the number of true values
 *
 */

// The implementation
export function trueCounterFn(arr: boolean[]) {
    return arr.reduce((acc, el) => el ? acc + 1 : acc, 0)
}











// in-source test suites
if (import.meta.vitest) {
    const { describe, expect, test } = import.meta.vitest

    describe('trueCounterFn', () => {
        // Test case 1: Empty array should return 0
        test('should return 0 for an empty array', () => {
            expect(trueCounterFn([])).toBe(0);
        });

        // Test case 2: Array with all true values should return the length of the array
        test('should return the length of the array for an array with all true values', () => {
            expect(trueCounterFn([true, true, true])).toBe(3);
        });

        // Test case 3: Array with all false values should return 0
        test('should return 0 for an array with all false values', () => {
            expect(trueCounterFn([false, false, false])).toBe(0);
        });

        // Test case 4: Array with mixed true and false values should return the number of true values
        test('should return the number of true values for an array with mixed true and false values', () => {
            expect(trueCounterFn([true, false, true])).toBe(2);
        });
    })
}