function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;
    let mid = 0;
    let result = -1

    while (left <= right) {
        mid = Math.floor((right + left) / 2);
        if (arr[mid] === target) {
           result = mid;
           break
        } else if (arr[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return result
}

if (import.meta.vitest) {
    const { describe, expect, test } = import.meta.vitest;

    describe("binary search", () => {

        test("less than half", () => {
            expect(binarySearch([1,2,3,4,5,6,7,8], 3)).toBe(2)
        })
        test("more than half", () => {
            expect(binarySearch([1,2,3,4,5,6,7,8], 6)).toBe(5)
        })
        test("not found", () => {
            expect(binarySearch([1,2,3,4,5,6,7,8], 11)).toBe(-1)
        })
        test("left edge", () => {
            expect(binarySearch([1,2,3,4,5,6,7,8], 1)).toBe(0)
        })
        test("right edge", () => {
            expect(binarySearch([1,2,3,4,5,6,7,8], 8)).toBe(7)
        })
    })

}
