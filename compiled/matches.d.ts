import { Predicate } from './types';
declare function matches(regexp: RegExp): Predicate;
declare function matches(regexp: RegExp, value: any): boolean;
export = matches;
