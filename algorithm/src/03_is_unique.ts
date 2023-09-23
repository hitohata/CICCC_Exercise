/**
 * Challenge: Is Unique
 * isUniqueFn is a function that takes an array of numbers. Write the logic to
 * return true if all the elements in the array are unique and false otherwise.
 *
 * Test Output:
 * console.log(isUnique([])) // true
 * console.log(isUnique([1, 2, 3, 4, 5])) // true
 * console.log(isUnique([1, 3, 2, 5, 4])) // true
 * console.log(isUnique([7])) // true
 * console.log(isUnique([2, 5, 2])) // false
 *
 * Positive Test Cases:
 * 1. Empty array should return true
 * 2. Array with unique elements should return true
 * 3. Array with duplicate elements should return false
 * 4. Array with single element should return true
 *
 */

// The implementation
export function isUniqueFn(arr: number[]): boolean {
    if (arr.length <= 1) return true;

    const map: Map<number, number> = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (map.get(arr[i])) return false;
        map.set(arr[i], 1)
    }

    return true;
}











// in-source test suites
if (import.meta.vitest) {
    const { describe, expect, test } = import.meta.vitest

    describe('isUniqueFn', () => {
        // Test case 1: Empty array should return true
        test('should return true for an empty array', () => {
            expect(isUniqueFn([])).toBe(true);
        });

        // Test case 2: Array with unique elements should return true
        test('should return true for an array with unique elements', () => {
            expect(isUniqueFn([1, 2, 3, 4, 5])).toBe(true);
        });

        // Test case 3: Array with duplicate elements should return false
        test('should return false for an array with duplicate elements', () => {
            expect(isUniqueFn([1, 3, 4, 5, 4])).toBe(false);
        });

        // Test case 4: Array with single element should return true
        test('should return true for an array with a single element', () => {
            expect(isUniqueFn([7])).toBe(true);
        });

    })
}