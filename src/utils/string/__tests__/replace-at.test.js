// Internal
import { replaceAt } from '..';
import { InvalidArgumentError } from '../../exceptions';

describe('replaceAt', () => {
  it('should raise InvalidArgumentError for wrong str type', () => {
    expect(() => replaceAt(null, 0, '')).toThrow(InvalidArgumentError);
    expect(() => replaceAt(undefined, 0, '')).toThrow(InvalidArgumentError);
    expect(() => replaceAt(1, 0, '')).toThrow(InvalidArgumentError);
    expect(() => replaceAt(() => {}, 0, '')).toThrow(InvalidArgumentError);
    expect(() => replaceAt(Symbol(''), 0, '')).toThrow(InvalidArgumentError);
  });

  it('should raise InvalidArgumentError for wrong index type', () => {
    expect(() => replaceAt('', null, '')).toThrow(InvalidArgumentError);
    expect(() => replaceAt('', undefined, '')).toThrow(InvalidArgumentError);
    expect(() => replaceAt('', '', '')).toThrow(InvalidArgumentError);
    expect(() => replaceAt('', () => {}, '')).toThrow(InvalidArgumentError);
    expect(() => replaceAt('', Symbol(''), '')).toThrow(InvalidArgumentError);
  });

  it('should raise InvalidArgumentError for wrong content type', () => {
    expect(() => replaceAt('', 0, null)).toThrow(InvalidArgumentError);
    expect(() => replaceAt('', 0, undefined)).toThrow(InvalidArgumentError);
    expect(() => replaceAt('', 0, 1)).toThrow(InvalidArgumentError);
    expect(() => replaceAt('', 0, () => {})).toThrow(InvalidArgumentError);
    expect(() => replaceAt('', 0, Symbol(''))).toThrow(InvalidArgumentError);
  });

  it('should replace substring', () => {
    // Arrange
    const startingString = 'test';
    const substring = 'Hello';

    // Act
    const newString = replaceAt(startingString, 0, substring);

    // Assert
    expect(newString).toEqual(substring);
  });
});
