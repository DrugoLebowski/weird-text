// Internal
import InvalidArgumentError from '../infrastructure/exceptions/invalid-argument-error';
import * as S from '../infrastructure/extensions/string';

/**
 * Decode a text using the provided original words.
 *
 * @param {String} text The text to decode
 * @param {Array<String>} bagOfWords The array of the original words, to use to decode the text
 * @param {function(string): { selection: String, index: Number}} selectionCriteria
 *  The function used to search the portion of text to decode.
 * @param {function(string, string): boolean} searchDuck The function used to search the similar word
 * @returns {String} The decoded text
 */
export function simpleDecoder(text, bagOfWords, selectionCriteria, searchDuck) {
  if (!S.isString(text))
    throw new InvalidArgumentError('text must be a string');
  if (!Array.isArray(bagOfWords))
    throw new InvalidArgumentError('bagOfWords must be an array');
  if (!(selectionCriteria instanceof Function))
    throw new InvalidArgumentError('selectionCriteria must be an Function');
  if (!(searchDuck instanceof Function))
    throw new InvalidArgumentError('searchDuck must be an Function');

  const selectionResult = selectionCriteria(text);

  if (!selectionResult) return text;

  return simpleDecoder(
    S.replaceAt(
      text,
      selectionResult.index,
      searchDuck(
        selectionResult.selection,
        bagOfWords
      )
    ),
    bagOfWords,
    selectionCriteria,
    searchDuck
  );
}
