// Internal
import InvalidArgumentError from '../infrastructure/exceptions/invalid-argument-error';
import * as S from '../infrastructure/extensions/string';

/**
 * Try to shuffle the word found by RegExp, trying some times
 * if the shuffling is not successful. As a last resort, return
 * the original word.
 *
 * @param {RegExpExecArray} regExpMatch The result of RegExp.exec
 * @param {Number} retry The number of shuffling retry
 * @returns {String} The shuffled string
 */
function shuffleWord(regExpMatch, retry = 0) {
  const shuffledWord = S.replaceAt(regExpMatch[0], 1, S.shuffle(regExpMatch[1]));

  if (shuffledWord !== regExpMatch[0]) return shuffledWord; // success case
  else if (retry === 3) return regExpMatch[0]; // fail case
  else return shuffleWord(regExpMatch, retry++); // retry case
}

/**
 * Encode a text, shuffling the internal substring (where 'internal substring'
 * is meant to be the string without the first and the last character) of each words.
 *
 * @param {String} text The text to encode.
 * @returns {String} The encoded text with the bag of the original encoded words.
 */
export function encoder(text) {
  if (!S.isString(text)) throw new InvalidArgumentError('text must be a string');

  const re = /[a-zA-Zàòèéùì]{1}([a-zA-Zàòèéùì]{2,})[a-zA-Zàòèéùì]{1}/g;

  return (function innerSearchAndEncode(result = { text: text, words: [] }) {
    const regExpMatch = re.exec(text);

    if (regExpMatch === null) return result;
    else return innerSearchAndEncode({
      text: S.replaceAt(result.text, regExpMatch.index, shuffleWord(regExpMatch)),
      words: [
        ...result.words,
        regExpMatch[0]
      ],
    })
  })();
}
