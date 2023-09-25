/**
 * Challenge: Anagram
 * anagramFn is a function that takes two strings and returns true if the strings
 * are anagrams of each other and false otherwise. Case and punctuation should be
 * ignored.
 *
 * Test Output:
 * console.log(anagramFn('listen', 'silent')) // true
 * console.log(anagramFn('listen', 'silentt')) // false
 * console.log(anagramFn('triangle', 'integral')) // true
 * console.log(anagramFn('abcd', 'abc')) // false
 *
 * Positive Test Cases:
 * 1. Two empty strings should return true
 * 2. Two strings with the same characters should return true
 * 3. Two strings with different characters should return false
 * 4. Two strings with the same characters but different lengths should return false
 * 5. Two strings with the same characters but different order should return true
 *
 */

// The implementation
export function anagramFn(str1: string, str2: string): boolean {
    const sanitize = (str: string) => str.toLowerCase().replace(/[^a-z0-9]/g, '').split("").sort().join();
    return sanitize(str1) === sanitize(str2)
}











// in-source test suites
if (import.meta.vitest) {
    const { describe, expect, test } = import.meta.vitest

    describe('anagramFn', () => {
        // Test case 1: Two empty strings should return true
        test('should return true for two empty strings', () => {
            expect(anagramFn('', '')).toBe(true);
        });

        // Test case 2: Two strings with the same characters should return true
        test('should return true for two strings with the same characters', () => {
            expect(anagramFn('listen', 'silent')).toBe(true);
        });

        // Test case 3: Two strings with different characters should return false
        test('should return false for two strings with different characters', () => {
            expect(anagramFn('dog', 'monkey')).toBe(false);
        });

        // Test case 4: Two strings with the same characters but different lengths should return false
        test('should return false for two strings with the same characters but different lengths', () => {
            expect(anagramFn('abcd', 'abcdd')).toBe(false);
        });

        test("tom riddle", () => {
            expect(anagramFn('Tom Marvolo Riddle', 'I am Lord Voldemort')).toBe(true)
        })
    })
}