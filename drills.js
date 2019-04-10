//Drill #1: How many Searches?

/* Part one: find 8 */
// 12
// grab [3,5,6,8,11]
// 6
// grab [8,11]
// 8

// 3 steps

/* Part two: find 16 */
// 12
// grab [14,15,17,18]
// 17
// grab [14,15]
// 14
// grab [15]
// 15
// no 16 so return -1.
// 4 steps.

// Find a book

function findBookByDewey(library, dewey, title) {
  for (const key in Object.entries) {
    if (dewey == key) {
      library.dewey.find(item => item.includes(title));
    }
    return item;
  }
}
