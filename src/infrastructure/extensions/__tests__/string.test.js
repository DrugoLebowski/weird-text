// Internal
import * as S from '../string';
import InvalidArgumentError from '../../exceptions/invalid-argument-error';

describe('isString', () => {
  it('should return false with no string', () => {
    expect(S.isString(1)).toBe(false);
    expect(S.isString(null)).toBe(false);
    expect(S.isString(undefined)).toBe(false);
    expect(S.isString(() => {})).toBe(false);
    expect(S.isString(Symbol(''))).toBe(false);
  });

  it('should return true with string', () => {
    expect(S.isString('Hi')).toBe(true);
  });
});

describe('shuffle', () => {
  it('should raise InvalidArgumentError', () => {
    expect(() => S.shuffle(null)).toThrow(InvalidArgumentError);
    expect(() => S.shuffle(undefined)).toThrow(InvalidArgumentError);
    expect(() => S.shuffle(1)).toThrow(InvalidArgumentError);
    expect(() => S.shuffle(() => ({}))).toThrow(InvalidArgumentError);
    expect(() => S.shuffle(Symbol('42'))).toThrow(InvalidArgumentError);
  });

  it('should shuffle string', () => {
    // Arrange
    const str = 'Hello, world';

    // Act & assert
    expect(S.shuffle(str)).not.toEqual(str);
  });

  it('should shuffle palindrome string with reverse', () => {
    // Arrange
    const str = 'aaaaa';

    // Act & assert
    expect(S.shuffle(str)).toEqual(str);
  });
})

describe('replaceAt', () => {
  it('should raise InvalidArgumentError for wrong str type', () => {
    expect(() => S.replaceAt(null, 0, '')).toThrow(InvalidArgumentError);
    expect(() => S.replaceAt(undefined, 0, '')).toThrow(InvalidArgumentError);
    expect(() => S.replaceAt(1, 0, '')).toThrow(InvalidArgumentError);
    expect(() => S.replaceAt(() => {}, 0, '')).toThrow(InvalidArgumentError);
    expect(() => S.replaceAt(Symbol(''), 0, '')).toThrow(InvalidArgumentError);
  });

  it('should raise InvalidArgumentError for wrong index type', () => {
    expect(() => S.replaceAt('', null, '')).toThrow(InvalidArgumentError);
    expect(() => S.replaceAt('', undefined, '')).toThrow(InvalidArgumentError);
    expect(() => S.replaceAt('', '', '')).toThrow(InvalidArgumentError);
    expect(() => S.replaceAt('', () => {}, '')).toThrow(InvalidArgumentError);
    expect(() => S.replaceAt('', Symbol(''), '')).toThrow(InvalidArgumentError);
  });

  it('should raise InvalidArgumentError for wrong content type', () => {
    expect(() => S.replaceAt('', 0, null)).toThrow(InvalidArgumentError);
    expect(() => S.replaceAt('', 0, undefined)).toThrow(InvalidArgumentError);
    expect(() => S.replaceAt('', 0, 1)).toThrow(InvalidArgumentError);
    expect(() => S.replaceAt('', 0, () => {})).toThrow(InvalidArgumentError);
    expect(() => S.replaceAt('', 0, Symbol(''))).toThrow(InvalidArgumentError);
  });

  it('should replace substring', () => {
    // Arrange
    const startingString = 'test';
    const substring = 'Hello';

    // Act
    const newString = S.replaceAt(startingString, 0, substring);

    // Assert
    expect(newString).toEqual(substring);
  });
});

describe('sameLength',  () => {
  it('should raise InvalidArgumentError for wrong str type', () => {
    expect(() => S.sameLength(null, '')).toThrow(InvalidArgumentError);
    expect(() => S.sameLength(undefined, '')).toThrow(InvalidArgumentError);
    expect(() => S.sameLength(1, '')).toThrow(InvalidArgumentError);
    expect(() => S.sameLength(() => {}, '')).toThrow(InvalidArgumentError);
    expect(() => S.sameLength(Symbol(''), '')).toThrow(InvalidArgumentError);
  });

  it('should raise InvalidArgumentError for wrong otherStr type', () => {
    expect(() => S.sameLength('', null)).toThrow(InvalidArgumentError);
    expect(() => S.sameLength('', undefined)).toThrow(InvalidArgumentError);
    expect(() => S.sameLength('', 1)).toThrow(InvalidArgumentError);
    expect(() => S.sameLength('', () => {})).toThrow(InvalidArgumentError);
    expect(() => S.sameLength('', Symbol(''))).toThrow(InvalidArgumentError);
  });

  it('should return true for same length', () => {
    // Arrange
    const [ firstString, secondString ] = [ 'hello', 'olleh' ];

    // Act & assert
    expect(S.sameLength(firstString, secondString)).toBe(true);
  });

  it('should return false for different lengths', () => {
    // Arrange
    const [ firstString, secondString ] = [ 'hello', 'world!' ];

    // Act & assert
    expect(S.sameLength(firstString, secondString)).toBe(false);
  });
});

describe('sameFirstChar', () => {
  it('should raise InvalidArgumentError for wrong str type', () => {
    expect(() => S.sameFirstChar(null, '')).toThrow(InvalidArgumentError);
    expect(() => S.sameFirstChar(undefined, '')).toThrow(InvalidArgumentError);
    expect(() => S.sameFirstChar(1, '')).toThrow(InvalidArgumentError);
    expect(() => S.sameFirstChar(() => {}, '')).toThrow(InvalidArgumentError);
    expect(() => S.sameFirstChar(Symbol(''), '')).toThrow(InvalidArgumentError);
  });

  it('should raise InvalidArgumentError for wrong otherString type', () => {
    expect(() => S.sameFirstChar('', null)).toThrow(InvalidArgumentError);
    expect(() => S.sameFirstChar('', undefined)).toThrow(InvalidArgumentError);
    expect(() => S.sameFirstChar('', 1)).toThrow(InvalidArgumentError);
    expect(() => S.sameFirstChar('', () => {})).toThrow(InvalidArgumentError);
    expect(() => S.sameFirstChar('', Symbol(''))).toThrow(InvalidArgumentError);
  });

  it('should return true for same first char', () => {
    // Arrange
    const [ firstString, secondString ] = [ 'h', 'h' ];

    // Act & assert
    expect(S.sameFirstChar(firstString, secondString)).toBe(true);
  });

  it('should return false for different first char', () => {
    // Arrange
    const [ firstString, secondString ] = [ 'a', 'h' ];

    // Act & assert
    expect(S.sameFirstChar(firstString, secondString)).toBe(false);
  });
})

describe('sameLastChar', () => {
  it('should raise InvalidArgumentError for wrong str type', () => {
    expect(() => S.sameLastChar(null, '')).toThrow(InvalidArgumentError);
    expect(() => S.sameLastChar(undefined, '')).toThrow(InvalidArgumentError);
    expect(() => S.sameLastChar(1, '')).toThrow(InvalidArgumentError);
    expect(() => S.sameLastChar(() => {}, '')).toThrow(InvalidArgumentError);
    expect(() => S.sameLastChar(Symbol(''), '')).toThrow(InvalidArgumentError);
  });

  it('should raise InvalidArgumentError for wrong otherStr type', () => {
    expect(() => S.sameLastChar('', null)).toThrow(InvalidArgumentError);
    expect(() => S.sameLastChar('', undefined)).toThrow(InvalidArgumentError);
    expect(() => S.sameLastChar('', 1)).toThrow(InvalidArgumentError);
    expect(() => S.sameLastChar('', () => {})).toThrow(InvalidArgumentError);
    expect(() => S.sameLastChar('', Symbol(''))).toThrow(InvalidArgumentError);
  });

  it('should return true for same first char', () => {
    // Arrange
    const [ firstString, secondString ] = [ 'h', 'hhh' ];

    // Act & assert
    expect(S.sameLastChar(firstString, secondString)).toBe(true);
  });

  it('should return false for different first char', () => {
    // Arrange
    const [ firstString, secondString ] = [ 'a', 'h' ];

    // Act & assert
    expect(S.sameLastChar(firstString, secondString)).toBe(false);
  });
});
