import { Predicate } from './types';
/**
 * Checks whether a string starts with a given prefix
 *
 * @function startsWith
 *
 * @example
 * var is = require('predicates');
 *
 * var isProfessor = is.startsWith('Prof. ');
 * isProfessor('Prof. Bend Ovah'); // true
 * // same as
 * is.startsWith('Prof. ', 'Prof. Bend Ovah'); // true
 *
 * isProfessor('Dr. Here U\' Are'); // false
 *
 * @throws {TypeError} if prefix is not a string
 * @throws {Error} if prefix is empty
 */
declare function startsWith(prefix: string): Predicate;
declare function startsWith(prefix: string, value: string): boolean;
export default startsWith;
