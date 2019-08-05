// Internal
import { isString, } from '../string';
import { InvalidArgumentError, } from '../exceptions';

/**
 * Get all the permutable words.
 *
 * @param {String} text The text to scan
 */
export default function* (text) {
  if (!isString(text)) {
    throw new InvalidArgumentError('text must be a string');
  }

  const re = /[\w\dàòèéùì]{4,}/gu;

  let selectedText;
  while (selectedText = re.exec(text)) {
    const numberOfCharacters = [
      ...new Set(selectedText[0].split(''))
    ].length;

    if (numberOfCharacters > 1) {
      yield {
        selection: selectedText[0],
        index: selectedText.index,
      };
    }
  }
};
