// Internal
import { wordsWithLengthGeqFour, } from '../selection-criteria';
import InvalidArgumentError from '../../infrastructure/exceptions/invalid-argument-error';

describe('wordsWithLengthGeqFour', () => {
  it('should throw InvalidArgumentError for wrong text\'s type', () => {
    expect(() => wordsWithLengthGeqFour(null)).toThrow(InvalidArgumentError);
    expect(() => wordsWithLengthGeqFour(undefined)).toThrow(InvalidArgumentError);
    expect(() => wordsWithLengthGeqFour(1)).toThrow(InvalidArgumentError);
    expect(() => wordsWithLengthGeqFour(false)).toThrow(InvalidArgumentError);
    expect(() => wordsWithLengthGeqFour(Symbol(''))).toThrow(InvalidArgumentError);
  })

  it('should select words', () => {
    // Arrange
    const text = 'Hello world, to everyone!';
    const numOfWordsWithLengthGeqFour = text
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
      .split(' ')
      .reduce(
        (counter, word) => word.length >= 4
          ? counter + 1
          : counter,
        0
      );

    let counter = 0;

    // Act
    let match;
    while ((match = wordsWithLengthGeqFour(text)) !== null)
      counter++;

    // Assert
    expect(counter).toEqual(numOfWordsWithLengthGeqFour);
  });

  it('should not select words', () => {
    // Arrange
    const text = 'He llo wor ld, to no one!';
    const numOfWordsWithLengthGeqFour = 0;

    let counter = 0;

    // Act
    let match;
    while ((match = wordsWithLengthGeqFour(text)) !== null)
      counter++;

    // Assert
    expect(counter).toEqual(numOfWordsWithLengthGeqFour);
  });
});
