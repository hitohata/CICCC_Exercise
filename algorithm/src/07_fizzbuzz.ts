/**
 * Challenge: FizzBuzz
 * fizzBuzzFn is a function that takes a number and returns a string based on the
 * following rules:
 * 1. If the number is divisible by 3, return 'Fizz'
 * 2. If the number is divisible by 5, return 'Buzz'
 * 3. If the number is divisible by 3 and 5, return 'FizzBuzz'
 * 4. Otherwise, return the number
 *
 * Test Output:
 * console.log(fizzBuzz(1)) // 1
 * console.log(fizzBuzz(3)) // Fizz
 * console.log(fizzBuzz(5)) // Buzz
 * console.log(fizzBuzz(15)) // FizzBuzz
 *
 * Positive Test Cases:
 * 1. Number divisible by 3 should return 'Fizz'
 * 2. Number divisible by 5 should return 'Buzz'
 * 3. Number divisible by 3 and 5 should return 'FizzBuzz'
 * 4. Number not divisible by 3 or 5 should return the number
 *
 */

// The implementation
export function fizzBuzzFn(num: number): number | string {
    if (num % 5 === 0 && num % 3 === 0) { return "FizzBuzz" }
    if (num % 5 === 0) { return "Buzz" }
    if (num % 3 === 0) { return "Fizz" }
    return num
}











// in-source test suites
if (import.meta.vitest) {
    const { describe, expect, test } = import.meta.vitest

    describe('fizzBuzzFn', () => {
        // Test case 1: Number divisible by 3 should return 'Fizz'
        test('should return Fizz for a number divisible by 3', () => {
            expect(fizzBuzzFn(3)).toBe('Fizz');
        });

        // Test case 2: Number divisible by 5 should return 'Buzz'
        test('should return Buzz for a number divisible by 5', () => {
            expect(fizzBuzzFn(5)).toBe('Buzz');
        });

        // Test case 3: Number divisible by 3 and 5 should return 'FizzBuzz'
        test('should return FizzBuzz for a number divisible by 3 and 5', () => {
            expect(fizzBuzzFn(15)).toBe('FizzBuzz');
        });

        // Test case 4: Number not divisible by 3 or 5 should return the number
        test('should return the number for a number not divisible by 3 or 5', () => {
            expect(fizzBuzzFn(1)).toBe(1);
        });
    })
}
