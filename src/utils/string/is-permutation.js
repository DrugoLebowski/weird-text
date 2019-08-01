// Internal
import { InvalidArgumentError, } from '../exceptions';
import { isString, sameLength, } from '../string';

/**
 * Check whether a `word` is a permutation of a `otherWord`.
 *q
 * @param {String} word The first word.
 * @param {String} otherWord The second word.
 * @returns {Boolean} True if the `word` is a permutation of `otherWord`, false otherwise.
 * @throws {InvalidArgumentError}
 */
export default function isPermutation(word, otherWord) {
  if (!isString(word)) throw new InvalidArgumentError('word must be a string');
  if (!isString(otherWord)) throw new  InvalidArgumentError('otherWord must be a string');

  if (!sameLength(word, otherWord)) return false;

  const [
    sortedWord,
    sortedDuck,
  ] = [
    word.split('').sort(),
    otherWord.split('').sort(),
  ];

  return sortedWord.reduce((carry, currentChar, index) => {
    return carry && (
      currentChar === sortedDuck[index]
    );
  }, true);
}
