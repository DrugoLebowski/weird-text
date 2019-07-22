// Internal
import InvalidArgumentError from '../../infrastructure/exceptions/invalid-argument-error';
import { encoder } from '../encoder';
import { simpleDecoder } from '../decoder';
import { wordsWithLengthGeqFour } from '../selection-criteria';

describe('simpleDecoder', () => {
  it('should throw InvalidArgumentError for wrong text type', () => {
    expect(() => simpleDecoder(null, [])).toThrow(InvalidArgumentError);
  });

  it('should throw InvalidArgumentError for wrong bagOfWords type', () => {
    expect(() => simpleDecoder('', null)).toThrow(InvalidArgumentError);
  });

  it('should throw InvalidArgumentError for wrong selectionCriteria type', () => {
    expect(() => simpleDecoder('', [], null)).toThrow(InvalidArgumentError);
  });

  it('should decode encoded test', () => {
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
      wordsWithLengthGeqFour
    );

    // Assert
    expect(decodedText).toEqual(text);
  });

  it('should decode encoded test with error', () => {
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
      wordsWithLengthGeqFour
    );

    // Assert
    expect(decodedText.substr(6)).toEqual(text.substr(6));
    expect(decodedText.substr(0, 4)).toEqual(encodedText.substr(0, 4));
  });
});
