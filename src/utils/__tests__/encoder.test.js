// Internal
import { encoder } from '../encoder';
import InvalidArgumentError from '../../infrastructure/exceptions/invalid-argument-error';

describe('encoder', () => {
  it('should throw InvalidArgumentError for wrong text', () => {
    expect(() => encoder(null)).toThrow(InvalidArgumentError);
  });

  it('should encode text', () => {
    // Arrange
    const text = 'Hello world, I\'m a ((((simple)))) test!! 42';

    // Act
    const encoderResult = encoder(text);

    // Assert
    expect(encoderResult).toBeDefined();
    expect(encoderResult.text).toBeDefined();
    expect(encoderResult.text).toHaveLength(text.length);
    expect(encoderResult.words).toHaveLength(4);
    expect(encoderResult.words[0]).toEqual('Hello');
  });
});
