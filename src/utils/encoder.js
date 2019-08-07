// Internal
import { isString, replaceAt, shuffle, } from '../utils/string';
import { InvalidArgumentError } from '../utils/exceptions';

/**
 * Encodes a text, shuffling the internal substring (where 'internal substring'
 * is meant to be the string without the first and the last character) of each word
 * that satisfies the `selectionCriteria`.
 *
 * @param {String} text The text to encode.
 * @param {IterableIterator<{ selection: string, index: number }>} selectionCriteria
 *  The criteria of selection of the words to encode.
 * @returns {String} The encoded text with the bag of the original encoded word
 */
export function encoder(text, selectionCriteria) {
  if (!isString(text)) {
    throw new InvalidArgumentError('text must be a string');
  }

  if (!selectionCriteria || selectionCriteria.constructor.name !== 'GeneratorFunction') {
    throw new InvalidArgumentError('selectionCriteria must be a generator');
  }

  const selectionResult = [...selectionCriteria(text)];

  return {
    text: selectionResult.reduce((originalText, selectedText) => {
      const shuffledTextSubstring = shuffle(
        selectedText.selection.substr(
          1,
          selectedText.selection.length - 2
        )
      );

      const shuffledSelectedText = replaceAt(
        selectedText.selection,
        1,
        shuffledTextSubstring
      ).replace(/\n/g, ' ');

      return replaceAt(
        originalText,
        selectedText.index,
        shuffledSelectedText
      );
    }, text),
    words: selectionResult.map(selectedText => selectedText.selection),
  };
};
