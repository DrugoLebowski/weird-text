// Internal
import InvalidArgumentError from '../infrastructure/exceptions/invalid-argument-error';
import * as S from '../infrastructure/extensions/string';

const isSimilar = (word, duck) => S.sameLength(word, duck)
  && S.sameFirstChar(word, duck)
  && S.sameLastChar(word, duck);

const searchDuckInArray = (word, ducks) => ducks.find(duck => isSimilar(duck, word)) || word;

/**
 * Decode a text using the provided original words.
 *
 * @param {String} text The text to decode
 * @param {Array} words The array of the original words, to use to decode the text
 * @returns {String} The decoded string
 */
export function simpleDecoder(text, bagOfWords) {
  if (!S.isString(text)) throw new InvalidArgumentError('text must be a string');
  if (!Array.isArray(bagOfWords)) throw new InvalidArgumentError('bagOfWords must be an array');

  const re = /[a-zA-Zàòèéùì]{1}([a-zA-Zàòèéùì]{2,})[a-zA-Zàòèéùì]{1}/g;

  return (function innerDecode(decodedText) {
    const regExpMatch = re.exec(text);

    if (!regExpMatch) return decodedText;
    else return innerDecode(
      S.replaceAt(
        decodedText,
        regExpMatch.index,
        searchDuckInArray(
          regExpMatch[0],
          bagOfWords
        )
      )
    )
  })(text);
}
