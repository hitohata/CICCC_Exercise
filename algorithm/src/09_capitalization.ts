/**
 * Challenge: Capitalization
 * capitalizeFn is a function that takes a string and returns a string with the
 * first letter capitalized. It should work with single letters, words, and
 * sentences.
 *
 * Test Output:
 * console.log(capitalizeFn('hello')) // Hello
 * console.log(capitalizeFn('aPPle')) // APPle
 * console.log(capitalizeFn('hi there')) // Hi There
 *
 * Positive Test Cases:
 * 1. String with all lowercase letters should return the string with the first letter capitalized
 * 2. String with all uppercase letters should return the string with the first letter capitalized
 * 3. String with mixed case letters should return the string with the first letter capitalized
 * 4. String with a single letter should return the string with the first letter capitalized
 * 5. String with a sentence should return the string with the first letter capitalized
 *
 */

// The implementation
export function capitalizeFn(str: string): string {
    const letters = str.split(" ");
    return letters.map((letter) => `${letter.substring(0, 1).toUpperCase()}${letter.substring(1, letter.length)}`).join(" ")
}











// in-source test suites
if (import.meta.vitest) {
    const { describe, expect, test } = import.meta.vitest

    describe('capitalizeFn', () => {
        // Test case 1: String with all lowercase letters should return the string with the first letter capitalized
        test('should return the string with the first letter capitalized for a string with all lowercase letters', () => {
            expect(capitalizeFn('hello')).toBe('Hello');
        });

        // Test case 2: String with all uppercase letters should return the string with the first letter capitalized
        test('should return the string with the first letter capitalized for a string with all uppercase letters', () => {
            expect(capitalizeFn('APPLE')).toBe('APPLE');
        });

        // Test case 3: String with mixed case letters should return the string with the first letter capitalized
        test('should return the string with the first letter capitalized for a string with mixed case letters', () => {
            expect(capitalizeFn('hElLo')).toBe('HElLo');
        });

        // Test case 4: String with a single letter should return the string with the first letter capitalized
        test('should return the string with the first letter capitalized for a string with a single letter', () => {
            expect(capitalizeFn('a')).toBe('A');
        });

        // Test case 5: String with a sentence should return the string with the first letter capitalized
        test('should return the string with the first letter capitalized for a string with a sentence', () => {
            expect(capitalizeFn('hi there')).toBe('Hi There');
        });

    })
}