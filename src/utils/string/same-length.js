// Internal
import { InvalidArgumentError, } from '../exceptions';
import { isString, } from '.';

/**
 * Check if the current string has the same length of the other string.
 *
 * @param {String} str The main string
 * @param {String} otherStr The other string with which check the length.
 * @returns {Boolean}
 * @throws {InvalidArgumentError}
 */
export default function sameLength(str, otherStr) {
  if (!isString(str)) throw new InvalidArgumentError('str must be a string');
  if (!isString(otherStr)) throw new InvalidArgumentError('otherStr must be a string');

  return str.length === otherStr.length;
}
