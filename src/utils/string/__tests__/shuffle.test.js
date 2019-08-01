// Internal
import { shuffle } from '..';

import { InvalidArgumentError } from '../../exceptions';

describe('shuffle', () => {
  it('should raise InvalidArgumentError', () => {
    expect(() => shuffle(null)).toThrow(InvalidArgumentError);
    expect(() => shuffle(undefined)).toThrow(InvalidArgumentError);
    expect(() => shuffle(1)).toThrow(InvalidArgumentError);
    expect(() => shuffle(() => ({}))).toThrow(InvalidArgumentError);
    expect(() => shuffle(Symbol('42'))).toThrow(InvalidArgumentError);
  });

  it('should shuffle string', () => {
    // Arrange
    const str = 'Hello, world';

    // Act & assert
    expect(shuffle(str)).not.toEqual(str);
  });

  it('should shuffle palindrome string with reverse', () => {
    // Arrange
    const str = 'aaaaa';

    // Act & assert
    expect(shuffle(str)).toEqual(str);
  });
})