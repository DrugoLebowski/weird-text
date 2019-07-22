// Internal
import InvalidArgumentError from '../infrastructure/exceptions/invalid-argument-error';
import * as S from '../infrastructure/extensions/string';

/**
 * Tries to shuffle the word.
 *
 * @param {String} word The word to shuffle
 * @returns {String} The shuffled word
 */
const shuffleInnerSubstringOfTheWord = word => S.replaceAt(
  word,
  1,
  S.shuffle(
    word.substr(
      1,
      word.length - 2
    )
  )
);

/**
 * Generates a new array, adding the `element` to the `array` iff
 * is unique.
 *
 * @param {Array} array The array to populate
 * @param {any} element The element to add to the array
 * @returns {Array} The new array
 */
const unshiftToArrayOfUnique = (array, element) => [
  ...new Set([
    element,
    ...array
  ]),
];

/**
 * Encodes a text, shuffling the internal substring (where 'internal substring'
 * is meant to be the string without the first and the last character) of each word
 * that satisfies the `selectionCriteria`.
 *
 * @param {String} text The text to encode.
 * @param {Function} selectionCriteria The criteria of selection of the words to encode.
 * @returns {String} The encoded text with the bag of the original encoded words.
 */
export function encoder(text, selectionCriteria) {
  if (!S.isString(text))
    throw new InvalidArgumentError('text must be a string');

  if (!(selectionCriteria instanceof Function))
    throw new InvalidArgumentError('selectionCriteria must be a Function');

  const selectionResult = selectionCriteria(text);

  if (!selectionResult)
    return {
      text,
      words: [],
    };

  const encoderResult = encoder(
    text,
    selectionCriteria
  );

  return {
    text: S.replaceAt(
      encoderResult.text,
      selectionResult.index,
      shuffleInnerSubstringOfTheWord(
        selectionResult.selection
      )
    ),
    words: unshiftToArrayOfUnique(
      encoderResult.words,
      selectionResult.selection,
    ),
  };
};
