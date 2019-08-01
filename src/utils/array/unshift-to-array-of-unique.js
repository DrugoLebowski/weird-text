// Internal
import { InvalidArgumentError, } from "../exceptions";

/**
 * Generates a new array, adding the `element` to the `array` iff
 * is unique.
 *
 * @param {Array<any>} array The array to populate
 * @param {any} element The element to add to the array
 * @returns {Array<any>} The new array
 */
export default function unshiftToArrayOfUnique(array, element) {
  if (!Array.isArray(array)) throw new InvalidArgumentError("array must be an array");

  return [
    ...new Set([
      element,
      ...array
    ]),
  ];
}
