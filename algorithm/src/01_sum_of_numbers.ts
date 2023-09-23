/**
 * Challenge: Simple Algo Test
 * sumArrayFn is a function that takes an array of numbers. Write the logic
 * to return the sum of all the numbers in the array.
 *
 * Test Output:
 * console.log(sumArrayFn([])) // 0
 * console.log(sumArrayFn([1, 2, 3])) // 6
 * console.log(sumArrayFn([10, 20, 30])) // 60
 *
 * Positive Test Cases:
 * 1. Empty array should return 0
 * 2. Array with all positive numbers should return the sum of all the numbers
 * 3. Array with all negative numbers should return the sum of all the numbers
 * 4. Array with mixed positive and negative numbers should return the sum of all the numbers
 *
 */


export function sumArrayFn(arr: number[]): number {
    if (arr.length === 0) return 0
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        // sum = sum + arr[i];
        sum+= arr[i]
    }
    return sum
}












// in-source test suites
if (import.meta.vitest) {
    const { describe, expect, test } = import.meta.vitest

    describe('sumArrayFn', () => {
        // Test case 1: Empty array should return 0
        test('should return 0 for an empty array', () => {
            expect(sumArrayFn([])).toBe(0);
        });

        // Test case 2: Array with all positive numbers should return the sum of all the numbers
        test('should return the sum of all the numbers for an array with all positive numbers', () => {
            expect(sumArrayFn([1, 2, 3])).toBe(6);
        });

        // Test case 3: Array with all negative numbers should return the sum of all the numbers
        test('should return the sum of all the numbers for an array with all negative numbers', () => {
            expect(sumArrayFn([-1, -2, -3])).toBe(-6);
        });

        // Test case 4: Array with mixed positive and negative numbers should return the sum of all the numbers
        test('should return the sum of all the numbers for an array with mixed positive and negative numbers', () => {
            expect(sumArrayFn([1, -2, 3])).toBe(2);
        });
    })
}
