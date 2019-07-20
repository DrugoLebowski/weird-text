// Internal
import { encoder } from '../encoder';
import { simpleDecoder } from '../decoder';
import InvalidArgumentError from '../../infrastructure/exceptions/invalid-argument-error';

describe('simpleDecoder', () => {
  it('should throw InvalidArgumentError for wrong text type', () => {
    expect(() => simpleDecoder(null, [])).toThrow(InvalidArgumentError);
  });

  it('should throw InvalidArgumentError for wrong bagOfWords type', () => {
    expect(() => simpleDecoder('', null)).toThrow(InvalidArgumentError);
  });

  it('should decode encoded test', () => {
    // Arrange
    const text = 'Hello world, I\'m a ((((simple)))) test!! 42';
    const encoderResult = encoder(text);
    const encodedText = encoderResult.text;
    const bagOfWords = encoderResult.words;

    // Act
    const decodedText = simpleDecoder(encodedText, bagOfWords);

    // Assert
    expect(decodedText).toEqual(text);
  });
});

