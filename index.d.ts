/**
 * Promise-based delay utility. Tiny, typed, zero dependencies.
 * @param ms Delay in ms (default: 0)
 * @returns Promise that resolves after the specified delay
 * @example wait(2000); // Wait for 2 seconds
 */
declare function wait(ms?: number): Promise<void>;
export = wait;