// Internal
import * as S from '../infrastructure/extensions/string';
import InvalidArgumentError from '../infrastructure/exceptions/invalid-argument-error';

/**
 * Represent a selection criteria for words
 * with length greater or equal four, contained
 * in a generic text.
 *
 * @returns {Function} The function of selection
 */
export const wordsWithLengthGeqFour = (() => {
  const re = /[\w\dàòèéùì]{4,}/g;

  return (text) => {
    if (!S.isString(text))
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
