// Internal
import { encoder, } from '../encoder';
import { InvalidArgumentError, } from '../../utils/exceptions';
import { wordsWithLengthGeqFour, } from '../selection-criterias';

describe('encoder', () => {
  it('should throw InvalidArgumentError for wrong text type', () => {
    expect(() => encoder(null)).toThrow(InvalidArgumentError);
  });

  it('should throw InvalidArgumentError for wrong selectionCriteria type', () => {
    expect(() => encoder('', null)).toThrow(InvalidArgumentError);
  });

  it('should encode text', () => {
    // Arrange
    const text = 'Hello world, I\'m a ((((simple)))) test!! 42';

    // Act
    const encoderResult = encoder(text, wordsWithLengthGeqFour);

    // Assert
    expect(encoderResult).not.toBeFalsy();
    expect(encoderResult.text).not.toBeFalsy();
    expect(encoderResult.text).toHaveLength(text.length);
    expect(encoderResult.words).not.toBeFalsy();
    expect(encoderResult.words).toHaveLength(4);
    expect(encoderResult.words[0]).toEqual('Hello');
  });

  it('should encode text with numbers inside the words', () => {
    // Arrange
    const text = 'Hel373lo wor145ld, I\'m a ((((sim56234ple)))) t563est!! 42';

    // Act
    const encoderResult = encoder(text, wordsWithLengthGeqFour);

    // Assert
    expect(encoderResult).not.toBeFalsy();
    expect(encoderResult.text).not.toBeFalsy();
    expect(encoderResult.text).toHaveLength(text.length);
    expect(encoderResult.words).not.toBeFalsy();
    expect(encoderResult.words).toHaveLength(4);
    expect(encoderResult.words[0]).toEqual('Hel373lo');
  });

  it('should not encode text', () => {
    // Arrange
    const text = 'No te xt to en co de!';

    // Act
    const encoderResult = encoder(text, wordsWithLengthGeqFour);

    // Assert
    expect(encoderResult).not.toBeFalsy();
    expect(encoderResult.text).not.toBeFalsy();
    expect(encoderResult.text).toHaveLength(text.length);
    expect(encoderResult.words).not.toBeFalsy();
    expect(encoderResult.words).toHaveLength(0);
  });
});
