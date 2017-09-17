/**
 * A function that returns true or false based on input arguments
 *
 * @typedef {Function} Predicate
 * @param {...*} arg
 * @return {boolean}
 */
export type Predicate<T = any> = (value: T, ...extraArgs: any[]) => boolean;

export type TypeGuardPredicate<T = any> = (value: any, ...extraArgs: any[]) => value is T;
