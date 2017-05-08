/**
 * A function that returns true or false based on input arguments
 *
 * @typedef {Function} Predicate
 * @param {...*} arg
 * @return {Boolean}
 */
export type Predicate = (value: any, ...extraArgs: any[]) => boolean;