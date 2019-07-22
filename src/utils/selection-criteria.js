/**
 * Represent a selection criteria for words
 * with length greater or equal four, contained
 * in a generic text.
 *
 * @returns {Function} The function of selection
 */
export const wordsWithLengthGeqFour = (() => {
  const re = /[\w\dàòèéùì]{4,}/g;

  return text => {
    const match = re.exec(text);

    if (match === null)
      return null;

    return {
      selection: match[0],
      index: match.index,
    };
  };
})();
