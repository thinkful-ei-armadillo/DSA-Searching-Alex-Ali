import React from "react";

function binarySearch(array, value, start, end, numOfOperations) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;
  var numOfOperations = numOfOperations === undefined ? 0 : numOfOperations;

  if (start > end) {
    return -1;
  }
  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end, value, item);
  if (item === value) {
    return `Found ${value} in ${numOfOperations} operations`;
  } else if (item < value) {
    numOfOperations++;
    return binarySearch(array, value, index + 1, end, numOfOperations);
  } else if (item > value) {
    numOfOperations++;
    return binarySearch(array, value, start, index - 1, numOfOperations);
  }
}

function getNumberOfOperationsLinearSearch(data, num) {
  for (let i = 0; i < data.length; i++) {
    if (data[i] == num) {
      return `Found ${num} in ${i + 1} operations out of a possible ${
        data.length
      }.`;
    }
  }
  return `Was unable to find ${num} in ${
    data.length
  } operations out of a possible ${data.length}.`;
}

class App extends React.Component {
  handleOnSubmit = e => {
    e.preventDefault();
    // alert(getNumberOfOperationsLinearSearch(data, e.target.numberEntry.value));
    alert(binarySearch(data, Number(e.target.numberEntry.value)));
    e.target.numberEntry.value = "";
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="numberEntry">Enter a number:</label>
          <input id="numberEntry" type="number" />
        </form>
      </div>
    );
  }
}
const data = [
  1,
  2,
  3,
  5,
  6,
  6,
  6,
  7,
  7,
  9,
  9,
  11,
  13,
  13,
  13,
  14,
  14,
  15,
  16,
  16,
  17,
  21,
  22,
  23,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  27,
  28,
  28,
  28,
  30,
  31,
  32,
  32,
  33,
  34,
  38,
  38,
  39,
  40,
  40,
  42,
  42,
  43,
  44,
  45,
  46,
  46,
  46,
  48,
  49,
  50,
  51,
  51,
  53,
  53,
  54,
  55,
  56,
  62,
  63,
  64,
  64,
  64,
  65,
  67,
  68,
  69,
  69,
  70,
  70,
  72,
  72,
  73,
  73,
  76,
  78,
  78,
  80,
  81,
  82,
  83,
  84,
  85,
  87,
  87,
  88,
  88,
  89,
  90,
  91,
  93,
  97,
  98,
  98
];
export default App;
