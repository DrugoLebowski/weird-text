// Internal
import { isPermutation } from '..';
import { InvalidArgumentError } from '../../exceptions';

describe('isPermutation', () => {
  it('should raise InvalidArgumentError for wrong word type', () => {
    expect(() => isPermutation(null, '')).toThrow(InvalidArgumentError);
    expect(() => isPermutation(undefined, '')).toThrow(InvalidArgumentError);
    expect(() => isPermutation(1, '')).toThrow(InvalidArgumentError);
    expect(() => isPermutation(() => {}, '')).toThrow(InvalidArgumentError);
    expect(() => isPermutation(Symbol(''), '')).toThrow(InvalidArgumentError);
  });

  it('should raise InvalidArgumentError for wrong otherWord type', () => {
    expect(() => isPermutation('', null)).toThrow(InvalidArgumentError);
    expect(() => isPermutation('', undefined)).toThrow(InvalidArgumentError);
    expect(() => isPermutation('', 1)).toThrow(InvalidArgumentError);
    expect(() => isPermutation('', () => {})).toThrow(InvalidArgumentError);
    expect(() => isPermutation('', Symbol(''))).toThrow(InvalidArgumentError);
  });

  it('should return false for words with different sizes', () => {
    // Arrange
    const [
      firstWord,
      secondWord,
    ] = [
      "abcde",
      "abcdefghi"
    ];

    // Act
    const isPermutationResult = isPermutation(firstWord, secondWord);

    // Assert
    expect(isPermutationResult).toBeFalsy();
  });

  it('should return false for different words', () => {
    // Arrange
    const [
      firstWord,
      secondWord,
    ] = [
      "abcde",
      "fghjd"
    ];

    // Act
    const isPermutationResult = isPermutation(firstWord, secondWord);

    // Assert
    expect(isPermutationResult).toBeFalsy();
  });

  it('should return true for permutation', () => {
    // Arrange
    const [
      firstWord,
      secondWord,
    ] = [
      "abcde",
      "edcba"
    ];

    // Act
    const isPermutationResult = isPermutation(firstWord, secondWord);

    // Assert
    expect(isPermutationResult).toBeTruthy();
  });
});
