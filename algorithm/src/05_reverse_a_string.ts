/**
 * Challenge: Reverse a String
 * reverseStringFn is a function that takes a given string and must return a new
 * string with the characters in reverse order.
 *
 * Test Output:
 * console.log(reverseString('')) // ''
 * console.log(reverseString('abcdef')) // 'fedcba'
 * console.log(reverseString('123456789')) // '987654321'
 *
 * Positive Test Cases:
 * 1. Empty string should return empty string
 * 2. String with characters should return reversed string
 * 3. String with numbers should return reversed string
 *
 */

// The implementation
export function reverseStringFn(str: string): string {
    return str.split("").reverse().join("")
}











// in-source test suites
if (import.meta.vitest) {
    const { describe, expect, test } = import.meta.vitest

    describe('reverseStringFn', () => {
        // Test case 1: Empty string should return empty string
        test('should return empty string for an empty string', () => {
            expect(reverseStringFn('')).toBe('');
        });

        // Test case 2: String with characters should return reversed string
        test('should return reversed string for a string with characters', () => {
            expect(reverseStringFn('abcdef')).toBe('fedcba');
        });

        // Test case 3: String with numbers should return reversed string
        test('should return reversed string for a string with numbers', () => {
            expect(reverseStringFn('123456789')).toBe('987654321');
        });
    })
}