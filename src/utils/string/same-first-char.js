// Internal
import { InvalidArgumentError } from '../exceptions';
import { isString, } from '.';

/**
 * Check if the current string has the same first
 * character with respect to the other string.
 *
 * @param {String} str The main string
 * @param {String} otherString The other string with which check the first char.
 * @returns {Boolean}
 * @throws {InvalidArgumentError}
 */
export default function sameFirstChar(str, otherString) {
  if (!isString(str)) throw new InvalidArgumentError('str must be a string');
  if (!isString(otherString)) throw new InvalidArgumentError('otherString must be a string');

  return str[0] === otherString[0];
}