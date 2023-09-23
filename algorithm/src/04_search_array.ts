/**
 * Challenge: Search Array
 * searchArrayFn is a function that takes a given array of numbers and a target number.
 * Write the logic to return true if the target is found in the array and false
 * otherwise.
 *
 * Test Output:
 * console.log(searchArray([], 1)) // false
 * console.log(searchArray([1, 2, 3, 4, 5], 1)) // true
 * console.log(searchArray([1, 2, 3, 4, 5], 6)) // false
 *
 * Positive Test Cases:
 * 1. Empty array should return false
 * 2. Array with target element should return true
 * 3. Array without target element should return false
 */

// The implementation
export function searchArrayFn(arr: number[], target: number): boolean {

    if (arr.length === 0) return false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false
}











// in-source test suites
if (import.meta.vitest) {
    const { describe, expect, test } = import.meta.vitest

    describe('searchArrayFn', () => {
        // Test case 1: Empty array should return false
        test('should return false for an empty array', () => {
            expect(searchArrayFn([], 1)).toBe(false);
        });

        // Test case 2: Array with target element should return true
        test('should return true for an array with target element', () => {
            expect(searchArrayFn([1, 2, 3, 4, 5], 1)).toBe(true);
        });

        // Test case 3: Array without target element should return false
        test('should return false for an array without target element', () => {
            expect(searchArrayFn([1, 2, 3, 4, 5], 6)).toBe(false);
        });
    })
}