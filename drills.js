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

function findMaxProfit(arr) {
  let max = 0;
  for (let i = 0; i < arr.length -2; i++) {
    if (arr[i+1]-arr[i] > max) {
      max = arr[i+1]-arr[i];
    }
  }
  return max;
}

// console.log(findMaxProfit([128, 97, 121, 123, 98, 97, 105]));


//assumes 100 floors
function eggDrop(eggBreaksOn) {
  const start = 14;
  let floor = 14; //taken from http://datagenetics.com/blog/july22012/index.html
  let i = 0;

  let egg1 = true;
  let egg2 = true;

  //get last before the first egg breaks;
  while (egg1) {
    i++;
    if ((floor + (start - i)) >= eggBreaksOn) {
      egg1 = false;
    } else {
      floor = floor + (start - i);
    }
  }
  while (egg2) {
    floor++;
    if (floor >= eggBreaksOn) {
      egg2 = false;
    }
  }
  console.log(floor-1);
}

eggDrop(100);
// 14 + 13 + 12 + 11 + 10 + 9 ...