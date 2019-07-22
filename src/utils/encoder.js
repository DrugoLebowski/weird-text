// Internal
import InvalidArgumentError from '../infrastructure/exceptions/invalid-argument-error';
import * as S from '../infrastructure/extensions/string';

/**
 * Try to shuffle the word found by RegExp.
 *
 * @param {String} word The word to which the inner substring is suffled
 * @returns {String} The shuffled string
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

const unshiftToUniqueArray = (array, element) => [
  ...new Set(
    [
      element,
      ...array
    ]
  ),
];

/**
 * Encode a text, shuffling the internal substring (where 'internal substring'
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

  if (selectionResult === null)
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
    words: unshiftToUniqueArray(
      encoderResult.words,
      selectionResult.selection,
    ),
  };
};
