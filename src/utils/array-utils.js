import Random from "./random";

export function range(start, stop) {
  return Array(stop - start)
    .fill(0)
    .map((_, i) => i + start);
}

/**
 * Classic Fisher-Yates algorithm - shuffles in place.
 *
 * @export
 * @param {array} array Array to shuffle in place
 * @returns {array} The shuffled array
 */
export function shuffle(array, seed) {
  const random = new Random(seed);
  for (let i = array.length - 1; i > 0; i -= 1) {
    let j = random.int(0, i);
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

/*
Below algorithm sourced from: https://stackoverflow.com/questions/18194745/shuffle-multiple-javascript-arrays-in-the-same-way

*/

export function doubleShuffle(array1, array2) {
  var index = array1.length;
  var rnd, tmp1, tmp2;

  while (index) {
    rnd = Math.floor(Math.random() * index);
    index -= 1;
    tmp1 = array1[index];
    tmp2 = array2[index];
    array1[index] = array1[rnd];
    array2[index] = array2[rnd];
    array1[rnd] = tmp1;
    array2[rnd] = tmp2;
  }
}

/**
 * Generate all possible combinations of values from array1 with values from array2, e.g.
 *    ["cat", "dog", "goat"] and ["red", "blue", "violet"]
 * would return
 *    [["dog", "violet"], ["cat", "red"], ["dog", "blue"], ...]
 *
 * @export
 * @param {*} array1
 * @param {*} array2
 * @returns {array} Array of combinations where each element is of the form: [array1 value, array2
 * value]
 */
export function generateCombinations(array1, array2, seed) {
  const combinations = [];
  array1.forEach(v1 => {
    array2.forEach(v2 => {
      combinations.push([v1, v2]);
    });
  });
  shuffle(combinations, seed);
  return combinations;
}
