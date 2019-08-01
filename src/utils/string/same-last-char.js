// Internal
import { InvalidArgumentError } from '../exceptions';
import { isString, } from '.';

/**
 * Check if the current string has the same last
 * character with respect to the other string.
 *
 * @param {String} str The main string
 * @param {String} otherStr The other string with which check the last char.
 * @returns {Boolean}
 * @throws {InvalidArgumentError}
 */
export default function sameLastChar(str, otherStr) {
  if (!isString(str)) throw new InvalidArgumentError('str must be a string');
  if (!isString(otherStr)) throw new InvalidArgumentError('otherStr must be a string');

  return str[str.length - 1] === otherStr[otherStr.length - 1];
}
