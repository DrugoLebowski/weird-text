/**
 * Check whether the variable is a string.
 *
 * @param {any} s - The variable to check
 */
export default function isString(s) {
  return s !== undefined && (
    typeof s === 'string' ||
    s instanceof String
  );
}
