// Internal
require('../infrastructure/exceptions/invalid-argument-exceptions');

const sameFirstChar = ;

const sameLastChar = (word, duck) => word[word.length - 1] === duck[duck.length - 1];

const isSimilar = (word, duck) => word.sameLength(duck)
  && sameFirstChar(word, duck)
  && sameLastChar(word, duck);

const searchDuckInArray = (word, ducks) => ducks.find(duck => isSimilar(duck, word));

/**
 * Decode a text using the provided original words.
 *
 * @param {String} text The text to decode
 * @param {Array} words The array of the original words, to use to decode the text
 * @returns {String} The decoded string
 */
export function simpleDecoder(text, bagOfWords) {
  if (!String.isString(text)) throw new InvalidArgumentError('text must be a string');
  if (!Array.isArray(bagOfWords)) throw new InvalidArgumentError('words must be an array');

  const re = /[a-zA-Zàòèéùì]{1}([a-zA-Zàòèéùì]{2,})[a-zA-Zàòèéùì]{1}/g;

  return (function innerDecode(decodedText) {
    const regExpMatch = re.exec(text);

    if (!regExpMatch) return decodedText;
    else return innerDecode(
      decodedText.replaceAt(
        regExpMatch.index,
        searchDuckInArray(
          regExpMatch[0],
          bagOfWords
        )
      )
    )
  })(text);
}
