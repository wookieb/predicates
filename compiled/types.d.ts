/**
 * A function that returns true or false based on input arguments
 *
 * @typedef {Function} Predicate
 * @param {...*} arg
 * @return {Boolean}
 */
export declare type Predicate<T = any> = (value: T, ...extraArgs: any[]) => boolean;
