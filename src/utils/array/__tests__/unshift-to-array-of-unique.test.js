// Internal
import { InvalidArgumentError, } from '../../exceptions';
import { unshiftToArrayOfUnique, } from '..';

describe('unshiftToArrayOfUnique', () => {
  it('should throw InvalidArgumentError for wrong array type', () => {
    expect(() => unshiftToArrayOfUnique(undefined, '')).toThrow(InvalidArgumentError);
    expect(() => unshiftToArrayOfUnique(1, '')).toThrow(InvalidArgumentError);
    expect(() => unshiftToArrayOfUnique('', '')).toThrow(InvalidArgumentError);
    expect(() => unshiftToArrayOfUnique(() => {}, '')).toThrow(InvalidArgumentError);
    expect(() => unshiftToArrayOfUnique(Symbol(''), '')).toThrow(InvalidArgumentError);
  });

  it('should add the value', () => {
    // Arrange
    const anArray = [];
    const aValue = 1;

    // Act
    const anArrayUpdated =  unshiftToArrayOfUnique(anArray, aValue);

    // Assert
    expect(anArrayUpdated).toHaveLength(1);
  });

  it('should have length of one after many values added', () => {
    // Arrange
    let anArray = [];

    // Act
    for (let _ of new Array(10)) {
      anArray = unshiftToArrayOfUnique(anArray, 1);
      anArray = unshiftToArrayOfUnique(anArray, 2);
    }

    // Assert
    expect(anArray).toHaveLength(2);
  });
});
