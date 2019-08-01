// Internal
import { sameLastChar } from '..';
import { InvalidArgumentError } from '../../exceptions/invalid-argument-error';

describe('sameLastChar', () => {
  it('should raise InvalidArgumentError for wrong str type', () => {
    expect(() => sameLastChar(null, '')).toThrow(InvalidArgumentError);
    expect(() => sameLastChar(undefined, '')).toThrow(InvalidArgumentError);
    expect(() => sameLastChar(1, '')).toThrow(InvalidArgumentError);
    expect(() => sameLastChar(() => {}, '')).toThrow(InvalidArgumentError);
    expect(() => sameLastChar(Symbol(''), '')).toThrow(InvalidArgumentError);
  });

  it('should raise InvalidArgumentError for wrong otherStr type', () => {
    expect(() => sameLastChar('', null)).toThrow(InvalidArgumentError);
    expect(() => sameLastChar('', undefined)).toThrow(InvalidArgumentError);
    expect(() => sameLastChar('', 1)).toThrow(InvalidArgumentError);
    expect(() => sameLastChar('', () => {})).toThrow(InvalidArgumentError);
    expect(() => sameLastChar('', Symbol(''))).toThrow(InvalidArgumentError);
  });

  it('should return true for same first char', () => {
    // Arrange
    const [ firstString, secondString ] = [ 'h', 'hhh' ];

    // Act & assert
    expect(sameLastChar(firstString, secondString)).toBe(true);
  });

  it('should return false for different first char', () => {
    // Arrange
    const [ firstString, secondString ] = [ 'a', 'h' ];

    // Act & assert
    expect(sameLastChar(firstString, secondString)).toBe(false);
  });
});
