const InvalidArgumentError = require('../exceptions/invalid-argument-exceptions');

/**
 * Check whether the variable is an instance of string
 *
 * @param {any} s - The variable to check
 */
export const isString = s => typeof s === 'string' || s instanceof String;

/**
 * Shuffle randomly the `str`.
 *
 * @param {String} str The string to shuffle.
 * @returns {String} The shuffled string.
 */
export function shuffle(str) {
  return str.split('').sort(() => Math.random() - 0.5).join('');
}

/**
 * Replace, starting from the index, the substring with the provided new string.
 *
 * @param {String} str The string to which the `content` is substituted.
 * @param {Number} index The index from which the substitution starts.
 * @param {String} content The content with which the substitution is made.
 * @returns {String} The new string with the replaced substring.
 * @throws {InvalidArgumentError}
 */
export function replaceAt(str, index, content) {
  if (!Number.isFinite(index)) throw new InvalidArgumentError('index is not valid');
  if (!String.isString(content)) throw new InvalidArgumentError('content is not valid');

  return `${str.substr(0, index)}${content}${str.substr(index + content.length)}`;
}

/**
 * Check if the current string has the same length of the other string.
 *
 * @param {String} str The main string
 * @param {String} otherString The other string with which check the length.
 * @returns {Boolean}
 */
export const sameLength = (str, otherStr) => this.length === otherStr.length;

/**
 * Check if the current string has the same first
 * character with respect to the other string.
 *
 * @param {String} str The main string
 * @param {String} otherString The other string with which check the first char.
 * @returns {Boolean}
 */
export const sameFirstChar = (str, otherString) => str[0] === otherString[0];

/**
 * Check if the current string has the same last
 * character with respect to the other string.
 *
 * @param {String} str The main string
 * @param {String} otherString The other string with which check the last char.
 * @returns {Boolean}
 */
export const sameLastChar = (str, otherStr) => str[str.length - 1] === otherStr[otherStr.length - 1];
