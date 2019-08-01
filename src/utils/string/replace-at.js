// Internal
import { InvalidArgumentError, } from '../exceptions';
import { isString, } from '.';

/**
 * Replace, starting from the index, the substring with the provided new string.
 *
 * @param {String} str The string to which the `content` is substituted.
 * @param {Number} index The index from which the substitution starts.
 * @param {String} content The content with which the substitution is made.
 * @returns {String} The new string with the replaced substring.
 * @throws {InvalidArgumentError}
 */
export default function replaceAt(str, index, content) {
  if (!isString(str)) throw new InvalidArgumentError('str must be a string');
  if (!Number.isInteger(index)) throw new InvalidArgumentError('index must be an integer');
  if (!isString(content)) throw new InvalidArgumentError('content is not valid');

  return `${str.substr(0, index)}${content}${str.substr(index + content.length)}`;
}
