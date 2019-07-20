// Internal
import * as S from '../string';
import InvalidArgumentError from '../../exceptions/invalid-argument-error';

it('should return false with no string', () => {
  expect(S.isString(1)).toBe(false);
});

it('should return true with string', () => {
  expect(S.isString('Hi')).toBe(true);
});

it('should shuffle string', () => {
  // Arrange
  const str = 'Hello, world';

  // Act & assert
  expect(S.shuffle(str)).not.toBe(str);
});

it('should raise InvalidArgumentError', () => {
  // Arrange
  const notAString = 1;

  // Act & assert
  expect(() => S.shuffle(notAString)).toThrow(InvalidArgumentError);
});

it('should raise InvalidArgumentError for wrong index type', () => {
  expect(() => S.replaceAt('', null, '')).toThrow(InvalidArgumentError);
});

it('should raise InvalidArgumentError for wrong str type', () => {
  expect(() => S.replaceAt(null, 0, '')).toThrow(InvalidArgumentError);
});

it('should raise InvalidArgumentError for wrong content type', () => {
  expect(() => S.replaceAt('', 0, null)).toThrow(InvalidArgumentError);
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

it('should raise InvalidArgumentError for wrong str type', () => {
  expect(() => S.sameLength(null, '')).toThrow(InvalidArgumentError);
});

it('should raise InvalidArgumentError for wrong otherStr type', () => {
  expect(() => S.sameLength('', null)).toThrow(InvalidArgumentError);
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

it('should raise InvalidArgumentError for wrong str type', () => {
  expect(() => S.sameFirstChar(null, '')).toThrow(InvalidArgumentError);
});

it('should raise InvalidArgumentError for wrong otherString type', () => {
  expect(() => S.sameFirstChar('', null)).toThrow(InvalidArgumentError);
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

it('should raise InvalidArgumentError for wrong str type', () => {
  expect(() => S.sameLastChar(null, '')).toThrow(InvalidArgumentError);
});

it('should raise InvalidArgumentError for wrong otherStr type', () => {
  expect(() => S.sameLastChar('', null)).toThrow(InvalidArgumentError);
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
