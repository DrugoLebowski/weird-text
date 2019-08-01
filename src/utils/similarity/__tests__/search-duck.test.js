// Internal
import searchDuck from '..';
import { InvalidArgumentError } from '../../exceptions';

describe('searchDuck', () => {
  it('should throw InvalidArgumentError for wrong word\'s type', () => {
    expect(() => searchDuck(null, null)).toThrow(InvalidArgumentError);
    expect(() => searchDuck(undefined, null)).toThrow(InvalidArgumentError);
    expect(() => searchDuck(1, null)).toThrow(InvalidArgumentError);
    expect(() => searchDuck(Symbol('42'), null)).toThrow(InvalidArgumentError);
  });

  it('should throw InvalidArgumentError for wrong ducks\' type', () => {
    expect(() => searchDuck('', null)).toThrow(InvalidArgumentError);
    expect(() => searchDuck('', undefined)).toThrow(InvalidArgumentError);
    expect(() => searchDuck('', 1)).toThrow(InvalidArgumentError);
    expect(() => searchDuck('', Symbol('42'))).toThrow(InvalidArgumentError);
  });

  it('should find a similar word', () => {
    // Arrange
    const word = 'Hlleo';
    const ducks = [ '42', 'nope', 'nopex2', 'Hello', ];

    // Act
    const foundWord = searchDuck(word, ducks);

    // Assert
    expect(foundWord).not.toEqual(word);
  });

  it('should not find a similar word', () => {
    // Arrange
    const word = 'Nope';
    const ducks = [ '42', 'nopex2', 'Hello', ];

    // Act
    const foundWord = searchDuck(word, ducks);

    // Assert
    expect(foundWord).toEqual(word);
  });

  it('should not find a similar word with empty array', () => {
    // Arrange
    const word = 'Nope';
    const ducks = [ ];

    // Act
    const foundWord = searchDuck(word, ducks);

    // Assert
    expect(foundWord).toEqual(word);
  });
});
