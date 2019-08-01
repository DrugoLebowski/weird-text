// Internal
import { InvalidArgumentError, } from '../exceptions';
import { isString, isPermutation, } from '../string';

/**
 * Searches a word contained in `otherWords` that
 * is similar to the `word` passed as argument.
 *
 * @param {String} word The word for which a similar word is searched
 * @param {Array<String>} otherWords The bag of similar words
 * @param {function(string, string): Boolean} [similarityCriterion=isPermutation] The criterion that should be used to compute the similarity
 * @returns {String} The similar word or the original word if the search fail
 * @throws {InvalidArgumentError}
 */
export default function searchDuck(word, otherWords, similarityCriterion = isPermutation) {
  if (!isString(word)) throw new InvalidArgumentError('word must be a string');
  if (!Array.isArray(otherWords)) throw new InvalidArgumentError('ducks must be an Array');

  return otherWords.find(duck => similarityCriterion(duck, word)) || word;
}
