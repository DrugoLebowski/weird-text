// Internal
import { sameFirstChar }  from '..';

import { InvalidArgumentError } from '../../exceptions';

describe('sameFirstChar', () => {
  it('should raise InvalidArgumentError for wrong str type', () => {
    expect(() => sameFirstChar(null, '')).toThrow(InvalidArgumentError);
    expect(() => sameFirstChar(undefined, '')).toThrow(InvalidArgumentError);
    expect(() => sameFirstChar(1, '')).toThrow(InvalidArgumentError);
    expect(() => sameFirstChar(() => {}, '')).toThrow(InvalidArgumentError);
    expect(() => sameFirstChar(Symbol(''), '')).toThrow(InvalidArgumentError);
  });

  it('should raise InvalidArgumentError for wrong otherString type', () => {
    expect(() => sameFirstChar('', null)).toThrow(InvalidArgumentError);
    expect(() => sameFirstChar('', undefined)).toThrow(InvalidArgumentError);
    expect(() => sameFirstChar('', 1)).toThrow(InvalidArgumentError);
    expect(() => sameFirstChar('', () => {})).toThrow(InvalidArgumentError);
    expect(() => sameFirstChar('', Symbol(''))).toThrow(InvalidArgumentError);
  });

  it('should return true for same first char', () => {
    // Arrange
    const [ firstString, secondString ] = [ 'h', 'h' ];

    // Act & assert
    expect(sameFirstChar(firstString, secondString)).toBe(true);
  });

  it('should return false for different first char', () => {
    // Arrange
    const [ firstString, secondString ] = [ 'a', 'h' ];

    // Act & assert
    expect(sameFirstChar(firstString, secondString)).toBe(false);
  });
});
