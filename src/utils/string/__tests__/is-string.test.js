// Internal
import { isString } from '..';

describe('isString', () => {
  it('should return false with no string', () => {
    expect(isString(1)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(() => {})).toBe(false);
    expect(isString(Symbol(''))).toBe(false);
  });

  it('should return true with string', () => {
    expect(isString('Hi')).toBe(true);
  });
});