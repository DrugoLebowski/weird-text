import InvalidArgumentError from '../exceptions/invalid-argument-error';

/**
 * Check whether the variable is a string.
 *
 * @param {any} s - The variable to check
 */
export const isString = s => s !== undefined &&
  (
    typeof s === 'string' ||
    s instanceof String
  );

/**
 * Shuffle randomly the `str`.
 *
 * @param {String} str The string to shuffle.
 * @returns {String} The shuffled string.
 * @throws {InvalidArgumentError}
 */
export function shuffle(str) {
  if (!isString(str)) throw new InvalidArgumentError('str must be a string');

  const shuffledStr = str.split('').sort(() => Math.random() - 0.5).join('');

  return shuffledStr === str
    ? str.split('').reverse().join('')
    : shuffledStr;
}

/**
 * Replace, starting from the index, the substring with the provided new string.
 *
 * @param {String} str The string to which the `content` is substituted.
 * @param {Number} index The index from which the substitution starts.
 * @param {String} content The content with which the substitution is made.
 * @returns {String} The new string with the replaced substring.
 * @throws {InvalidArgumentError}
 */
export function replaceAt(str, index, content) {
  if (!isString(str)) throw new InvalidArgumentError('str must be a string');
  if (!Number.isInteger(index)) throw new InvalidArgumentError('index must be an integer');
  if (!isString(content)) throw new InvalidArgumentError('content is not valid');

  return `${str.substr(0, index)}${content}${str.substr(index + content.length)}`;
}

/**
 * Check if the current string has the same length of the other string.
 *
 * @param {String} str The main string
 * @param {String} otherStr The other string with which check the length.
 * @returns {Boolean}
 * @throws {InvalidArgumentError}
 */
export function sameLength(str, otherStr) {
  if (!isString(str)) throw new InvalidArgumentError('str must be a string');
  if (!isString(otherStr)) throw new InvalidArgumentError('otherStr must be a string');

  return str.length === otherStr.length;
}

/**
 * Check if the current string has the same first
 * character with respect to the other string.
 *
 * @param {String} str The main string
 * @param {String} otherString The other string with which check the first char.
 * @returns {Boolean}
 * @throws {InvalidArgumentError}
 */
export function sameFirstChar(str, otherString) {
  if (!isString(str)) throw new InvalidArgumentError('str must be a string');
  if (!isString(otherString)) throw new InvalidArgumentError('otherString must be a string');

  return str[0] === otherString[0];
}

/**
 * Check if the current string has the same last
 * character with respect to the other string.
 *
 * @param {String} str The main string
 * @param {String} otherStr The other string with which check the last char.
 * @returns {Boolean}
 * @throws {InvalidArgumentError}
 */
export function sameLastChar(str, otherStr) {
  if (!isString(str)) throw new InvalidArgumentError('str must be a string');
  if (!isString(otherStr)) throw new InvalidArgumentError('otherStr must be a string');

  return str[str.length - 1] === otherStr[otherStr.length - 1];
}
