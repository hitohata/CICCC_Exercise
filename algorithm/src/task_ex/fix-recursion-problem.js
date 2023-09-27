export function printPattern(targetNumber) {
    // Base case
    if (targetNumber <= 0) {
        console.log(targetNumber);
        return;
    }

    console.log(targetNumber);

    // Recursive case
    printPattern(targetNumber - 5);

    console.log(targetNumber);
}

printPattern(10);




if (import.meta.vitest) {
    const { beforeEach, afterEach, describe, it, expect, vi } = import.meta.vitest

    describe.only('should mock console.log', () => {
        let consoleLogSpy;

        beforeEach(() => {
            consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => undefined);
        });

        afterEach(() => {
            consoleLogSpy.mockRestore();
        });

        it('should log `10 5 0 5 10` when targetNumber is 10', () => {
            printPattern(10);
            expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 10);
            expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 5);
            expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 0);
            expect(consoleLogSpy).toHaveBeenNthCalledWith(4, 5);
            expect(consoleLogSpy).toHaveBeenLastCalledWith(10);
        });

        it('should log 5 times when targetNumber is 10', () => {
            printPattern(10);
            expect(consoleLogSpy).toHaveBeenCalledTimes(5);
        });

        it('should log `8 3 −2 3 8` when targetNumber is 10', () => {
            printPattern(8);
            expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 8);
            expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 3);
            expect(consoleLogSpy).toHaveBeenNthCalledWith(3, -2);
            expect(consoleLogSpy).toHaveBeenNthCalledWith(4, 3);
            expect(consoleLogSpy).toHaveBeenLastCalledWith(8);
        });

        it('should log 5 times when targetNumber is 8', () => {
            printPattern(8);
            expect(consoleLogSpy).toHaveBeenCalledTimes(5);
        });
    });
}