// Internal
import * as S from '../similarity';
import InvalidArgumentError from '../../infrastructure/exceptions/invalid-argument-error';

describe('seachDuck', () => {
  it('should throw InvalidArgumentError for wrong word\'s type', () => {
    expect(() => S.searchDuck(null, null)).toThrow(InvalidArgumentError);
    expect(() => S.searchDuck(undefined, null)).toThrow(InvalidArgumentError);
    expect(() => S.searchDuck(1, null)).toThrow(InvalidArgumentError);
    expect(() => S.searchDuck(Symbol('42'), null)).toThrow(InvalidArgumentError);
  });

  it('should throw InvalidArgumentError for wrong ducks\' type', () => {
    expect(() => S.searchDuck('', null)).toThrow(InvalidArgumentError);
    expect(() => S.searchDuck('', undefined)).toThrow(InvalidArgumentError);
    expect(() => S.searchDuck('', 1)).toThrow(InvalidArgumentError);
    expect(() => S.searchDuck('', Symbol('42'))).toThrow(InvalidArgumentError);
  });

  it('should find a similar word', () => {
    // Arrange
    const word = 'Hlleo';
    const ducks = [ '42', 'nope', 'nopex2', 'Hello', ];

    // Act
    const foundWord = S.searchDuck(word, ducks);

    // Assert
    expect(foundWord).not.toEqual(word);
  });

  it('should not find a similar word', () => {
    // Arrange
    const word = 'Nope';
    const ducks = [ '42', 'nopex2', 'Hello', ];

    // Act
    const foundWord = S.searchDuck(word, ducks);

    // Assert
    expect(foundWord).toEqual(word);
  });

  it('should not find a similar word with empty array', () => {
    // Arrange
    const word = 'Nope';
    const ducks = [ ];

    // Act
    const foundWord = S.searchDuck(word, ducks);

    // Assert
    expect(foundWord).toEqual(word);
  });
});

describe('isSimilar', () => {
  it('should throw InvalidArgumentError for wrong word\'s type', () => {
    expect(() => S.isSimilar(null, null)).toThrow(InvalidArgumentError);
    expect(() => S.isSimilar(undefined, null)).toThrow(InvalidArgumentError);
    expect(() => S.isSimilar(1, null)).toThrow(InvalidArgumentError);
    expect(() => S.isSimilar(Symbol('42'), null)).toThrow(InvalidArgumentError);
  });

  it('should throw InvalidArgumentError for wrong duck\'s type', () => {
    expect(() => S.isSimilar('', null)).toThrow(InvalidArgumentError);
    expect(() => S.isSimilar('', undefined)).toThrow(InvalidArgumentError);
    expect(() => S.isSimilar('', 1)).toThrow(InvalidArgumentError);
    expect(() => S.isSimilar('', Symbol('42'))).toThrow(InvalidArgumentError);
  });

  it('should return true to similar words', () => {
    // Arrange
    const word = 'Hlleo';
    const duck = 'Hello';

    // Act
    const result = S.isSimilar(word, duck);

    // Assert
    expect(result).toBeTruthy();
  });

  it('should return false to different words', () => {
    // Arrange
    const word = 'Hlleo';
    const duck = '42';

    // Act
    const result = S.isSimilar(word, duck);

    // Assert
    expect(result).toBeFalsy();
  });
});
