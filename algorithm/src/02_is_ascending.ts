/**
 * Challenge: Is Ascending Order
 * isSortedFn is a function that takes an array of numbers. Write the logic to
 * return true if the elements in the array are in ascending order and false
 * otherwise. An array is said to be in ascending order if the elements, from
 * left to right, are in increasing order. None of the elements in the array are
 * equal to each other.
 *
 * Test Output:
 * console.log(isSortedFn([])) // true
 * console.log(isSortedFn([1, 2, 3, 4, 5])) // true
 * console.log(isSortedFn([1, 3, 2, 5, 4])) // false
 * console.log(isSortedFn([7])) // true
 * console.log(isSortedFn([2, 5])) // true
 *
 * Positive Test Cases:
 * 1. Empty array should return true
 * 2. Sorted array should return true
 * 3. Unsorted array should return false
 * 4. Array with single element should return true
 * 5. Array with two elements in ascending order should return true
 * 6. Array with two elements in descending order should return false
 *
 */


export function isSortedFn(arr: number[]): boolean {

    if (arr.length <= 1) return true;

    for (let index = 1; index < arr.length; index++) {
        if (arr[index - 1] > arr[index]) {
            return false
        }
    }

    return true;
}













// in-source test suites
if (import.meta.vitest) {
    const { describe, expect, test } = import.meta.vitest

    describe('isSortedFn', () => {
        // Test case 1: Empty array should return true
        test('should return true for an empty array', () => {
            expect(isSortedFn([])).toBe(true);
        });

        // Test case 2: Sorted array should return true
        test('should return true for a sorted array in ascending order', () => {
            expect(isSortedFn([1, 2, 3, 4, 5])).toBe(true);
        });

        // Test case 3: Unsorted array should return false
        test('should return false for an unsorted array', () => {
            expect(isSortedFn([1, 3, 2, 5, 4])).toBe(false);
        });

        // Test case 4: Array with single element should return true
        test('should return true for an array with a single element', () => {
            expect(isSortedFn([7])).toBe(true);
        });

        // Test case 5: Array with two elements in ascending order should return true
        test('should return true for an array with two elements in ascending order', () => {
            expect(isSortedFn([2, 5])).toBe(true);
        });

        // Test case 6: Array with two elements in descending order should return false
        test('should return false for an array with two elements in descending order', () => {
            expect(isSortedFn([7, 3])).toBe(false);
        });
    });
}
