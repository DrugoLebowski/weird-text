// Internal
import { permutableWords, } from '..';
import { InvalidArgumentError, } from '../../exceptions';

describe('permutableWords', () => {
  it('should throw InvalidArgumentError for wrong text\'s type', () => {
    expect(() => permutableWords(null).next()).toThrow(InvalidArgumentError);
    expect(() => permutableWords(undefined).next()).toThrow(InvalidArgumentError);
    expect(() => permutableWords(1).next()).toThrow(InvalidArgumentError);
    expect(() => permutableWords(false).next()).toThrow(InvalidArgumentError);
    expect(() => permutableWords(Symbol()).next()).toThrow(InvalidArgumentError);
  })

  it('should select words', () => {
    // Arrange
    const text = 'Hello world, to everyone!';
    const numberOfPermutableWords = text
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
      .split(' ')
      .reduce(
        (counter, word) => word.length >= 4
          ? counter + 1
          : counter,
        0
      );

    // Act
    const numberOfWords = [...permutableWords(text)].length;

    // Assert
    expect(numberOfWords).toEqual(numberOfPermutableWords);
  });

  it('should not select words', () => {
    // Arrange
    const text = 'He llo wor ld, to no one!';
    const numberOfPermutableWords = 0;

    // Act
    const numberOfWords = [...permutableWords(text)].length;

    // Assert
    expect(numberOfWords).toEqual(numberOfPermutableWords);
  });
});
