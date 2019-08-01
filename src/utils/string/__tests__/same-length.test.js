// Internal
import { sameLength } from '..';
import { InvalidArgumentError } from '../../exceptions';

describe('sameLength',  () => {
  it('should raise InvalidArgumentError for wrong str type', () => {
    expect(() => sameLength(null, '')).toThrow(InvalidArgumentError);
    expect(() => sameLength(undefined, '')).toThrow(InvalidArgumentError);
    expect(() => sameLength(1, '')).toThrow(InvalidArgumentError);
    expect(() => sameLength(() => {}, '')).toThrow(InvalidArgumentError);
    expect(() => sameLength(Symbol(''), '')).toThrow(InvalidArgumentError);
  });

  it('should raise InvalidArgumentError for wrong otherStr type', () => {
    expect(() => sameLength('', null)).toThrow(InvalidArgumentError);
    expect(() => sameLength('', undefined)).toThrow(InvalidArgumentError);
    expect(() => sameLength('', 1)).toThrow(InvalidArgumentError);
    expect(() => sameLength('', () => {})).toThrow(InvalidArgumentError);
    expect(() => sameLength('', Symbol(''))).toThrow(InvalidArgumentError);
  });

  it('should return true for same length', () => {
    // Arrange
    const [ firstString, secondString ] = [ 'hello', 'olleh' ];

    // Act & assert
    expect(sameLength(firstString, secondString)).toBe(true);
  });

  it('should return false for different lengths', () => {
    // Arrange
    const [ firstString, secondString ] = [ 'hello', 'world!' ];

    // Act & assert
    expect(sameLength(firstString, secondString)).toBe(false);
  });
});
