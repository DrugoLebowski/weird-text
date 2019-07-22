// Internal
import InvalidArgumentError from '../infrastructure/exceptions/invalid-argument-error';
import * as S from '../infrastructure/extensions/string';

/**
 * Computes the similarity among the word and the duck, checking if they have
 * same length and same first and last characters.
 *
 * @param {String} word The word to which the similarity should be computed
 * @param {String} duck The word with which the similarity is computed
 * @returns {Boolean} True if the word and the duck is similar, false otherwise.
 * @throws {InvalidArgumentError}
 */
export function isSimilar(word, duck) {
  if (!S.isString(word))
    throw new InvalidArgumentError(`word must be a string`);

  if (!S.isString(duck))
    throw new InvalidArgumentError(`duck must be a string`);

  return S.sameLength(word, duck)
    && S.sameFirstChar(word, duck)
    && S.sameLastChar(word, duck);
}

/**
 * Searches a word contained in `ducks` that
 * is similar to the `word` passed as argument.
 *
 * @param {String} word The word for which a similar word is searched
 * @param {Array} ducks The bag of similar words
 * @param {Function} [similarityCriterion=isSimilar] The criterion that should be used to compute the similarity
 * @returns The similar word or the original word if the search fails.
 * @throws {InvalidArgumentError}
 */
export function searchDuck(word, ducks, similarityCriterion = isSimilar) {
  if (!S.isString(word))
    throw new InvalidArgumentError('word must be a string');

  if (!Array.isArray(ducks))
    throw new InvalidArgumentError('ducks must be an Array');

  return  ducks.find(duck => similarityCriterion(duck, word)) || word;
}
