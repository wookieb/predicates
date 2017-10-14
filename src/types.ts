/**
 * A function that returns true or false based on input arguments
 */
export type Predicate<T = any> = (value: T, ...extraArgs: any[]) => boolean;

/**
 * A function that returns true or false based on input arguments but additionally is a TypeGuard for Typescript compiler
 */
export type TypeGuardPredicate<T = any> = (value: any, ...extraArgs: any[]) => value is T;
