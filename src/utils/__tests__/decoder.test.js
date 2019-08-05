// Internal
import { InvalidArgumentError } from '../../utils/exceptions';
import { simpleDecoder } from '..';
import { permutableWords } from '../selection-criterias';
import searchDuck from '../similarity';

describe('simpleDecoder', () => {
  it('should throw InvalidArgumentError for wrong text type', () => {
    expect(() => simpleDecoder(null)).toThrow(InvalidArgumentError);
    expect(() => simpleDecoder(undefined)).toThrow(InvalidArgumentError);
    expect(() => simpleDecoder(1)).toThrow(InvalidArgumentError);
    expect(() => simpleDecoder(Symbol('42'))).toThrow(InvalidArgumentError);
  });

  it('should throw InvalidArgumentError for wrong bagOfWords type', () => {
    expect(() => simpleDecoder('', null)).toThrow(InvalidArgumentError);
    expect(() => simpleDecoder('', undefined)).toThrow(InvalidArgumentError);
    expect(() => simpleDecoder('', 1)).toThrow(InvalidArgumentError);
    expect(() => simpleDecoder('', Symbol('42'))).toThrow(InvalidArgumentError);
  });

  it('should throw InvalidArgumentError for wrong selectionCriteria type', () => {
    expect(() => simpleDecoder('', [], null)).toThrow(InvalidArgumentError);
    expect(() => simpleDecoder('', [], undefined)).toThrow(InvalidArgumentError);
    expect(() => simpleDecoder('', [], 1)).toThrow(InvalidArgumentError);
    expect(() => simpleDecoder('', [], '')).toThrow(InvalidArgumentError);
    expect(() => simpleDecoder('', [], Symbol('42'))).toThrow(InvalidArgumentError);
  });

  it('should throw InvalidArgumentError for wrong searchDuck type', () => {
    expect(() => simpleDecoder('', [], function* () {}, null)).toThrow(InvalidArgumentError);
    expect(() => simpleDecoder('', [], function* () {}, undefined)).toThrow(InvalidArgumentError);
    expect(() => simpleDecoder('', [], function* () {}, 1)).toThrow(InvalidArgumentError);
    expect(() => simpleDecoder('', [], function* () {}, '')).toThrow(InvalidArgumentError);
    expect(() => simpleDecoder('', [], function* () {}, Symbol('42'))).toThrow(InvalidArgumentError);
  });

  it('should decode encoded text', () => {
    // Arrange
    const text = 'Hello world, I\'m a ((((simple)))) test!! 42';
    const encodedText = 'Hlelo wrold, I\'m a ((((smpile)))) tset!! 42';
    const bagOfWords = [
      'Hello',
      'world',
      'simple',
      'test'
    ];

    // Act
    const decodedText = simpleDecoder(
      encodedText,
      bagOfWords,
      permutableWords,
      searchDuck
    );

    // Assert
    expect(decodedText).toEqual(text);
  });

  it('should decode encoded text with error', () => {
    // Arrange
    const text = 'Hello world, I\'m a ((((simple)))) test!! 42';
    const encodedText = 'Hlelo wrold, I\'m a ((((smpile)))) tset!! 42';
    const bagOfWords = [
      'world',
      'simple',
      'test'
    ];

    // Act
    const decodedText = simpleDecoder(
      encodedText,
      bagOfWords,
      permutableWords,
      searchDuck
    );

    // Assert
    expect(decodedText.substr(6)).toEqual(text.substr(6));
    expect(decodedText.substr(0, 4)).toEqual(encodedText.substr(0, 4));
  });
});
