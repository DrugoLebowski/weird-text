// Internal
import { isString, replaceAt, shuffle, } from '../utils/string';
import { unshiftToArrayOfUnique } from '../utils/array';
import { InvalidArgumentError } from '../utils/exceptions';

/**
 * Encodes a text, shuffling the internal substring (where 'internal substring'
 * is meant to be the string without the first and the last character) of each word
 * that satisfies the `selectionCriteria`.
 *
 * @param {String} text The text to encode.
 * @param {function(String): { selection: String, index: Number}} selectionCriteria
 *  The criteria of selection of the words to encode.
 * @returns {String} The encoded text with the bag of the original encoded word
 */
export function encoder(text, selectionCriteria) {
  if (!isString(text))
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
    text: replaceAt(
      encoderResult.text,
      selectionResult.index,
      replaceAt(
        selectionResult.selection,
        1,
        shuffle(
          selectionResult.selection.substr(
            1,
            selectionResult.selection.length - 2
          )
        )
      ).replace(/\n/g, ' ')
    ),
    words: unshiftToArrayOfUnique(
      encoderResult.words,
      selectionResult.selection,
    ),
  };
};
