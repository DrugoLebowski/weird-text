// Internal
import { InvalidArgumentError } from '../exceptions';
import { isString, } from '.';

/**
 * Shuffle randomly the `text`.
 *
 * @param {String} text The text to shuffle.
 * @returns {String} The shuffled text.
 * @throws {InvalidArgumentError}
 */
export default function shuffle(text) {
  if (!isString(text)) throw new InvalidArgumentError('text must be a string');

  const chars = text.split('');
  for (let i = 0; i < chars.length; i++) {
    const randomIdx = Math.floor(Math.random() * i);
    [chars[i], chars[randomIdx]] = [chars[randomIdx], chars[i]];
  }

  const shuffledText = chars.join('');

  return text === shuffledText
    ? text.split('').reverse().join('')
    : shuffledText;
}
