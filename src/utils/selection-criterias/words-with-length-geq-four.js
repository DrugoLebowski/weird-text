// Internal
import { isString, } from '../string';
import { InvalidArgumentError, } from '../exceptions';

/**
 * Represent a selection criteria for words
 * with length greater or equal four, contained
 * in a generic text.
 *
 * @param {String} text The text to scan
 * @returns {function(string): { selection: String, index: Number}} 
 *  The selected text and the index where the text starts
 */
export default (function() {
  const re = /[\w\dàòèéùì]{4,}/g;

  return (text) => {
    if (!isString(text))
      throw new InvalidArgumentError('text must be a string');

    const match = re.exec(text);

    if (!match)
      return null;

    return {
      selection: match[0],
      index: match.index,
    };
  };
})();
