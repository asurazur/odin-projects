const body = document.querySelector("body");

const fibonacci = (n) => {
  let sequenceLength = n;

  function setSequence(length) {
    sequenceLength = length;
  }

  function fibSequence() {
    const result = [];
    let prev = 0,
      curr = 1;
    for (let i = 0; i < sequenceLength; ++i) {
      result.push(prev);
      [prev, curr] = [curr, prev + curr];
    }
    return result;
  }

  function fibSeqRecursive(counter = 0, prev = 0, curr = 1, result = []) {
    if (counter === sequenceLength) return result;
    result.push(prev);
    console.log("This was printed recursively");
    return fibSeqRecursive(counter + 1, curr, prev + curr, result);
  }

  return { setSequence, fibSequence, fibSeqRecursive };
};

const fib = fibonacci(8);
let sequence = fib.fibSequence();
let sequenceRec = fib.fibSeqRecursive();

const iterativeFib = document.createElement("p");
iterativeFib.textContent = `Iterative Fibonacci: ${sequence}`;
body.appendChild(iterativeFib);
console.log(`Iterative Fibonacci: ${sequence}`);

const recursiveFib = document.createElement("p");
recursiveFib.textContent = `Recursive Fibonacci: ${sequenceRec}`;
body.appendChild(recursiveFib);
console.log(`Recursive Fibonacci: ${sequenceRec}`);

// Merge Sort
const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  } else {
    // Sort Left
    const mid = Math.round(array.length / 2);
    const leftArray = mergeSort(array.slice(0, mid));
    // Sort Right
    const rightArray = mergeSort(array.slice(mid, array.length));
    // Merge Left and Right
    return merge(leftArray, rightArray);
  }
};

const merge = (left, right) => {
  let leftCounter = 0,
    rightCounter = 0;
  let result = [];

  //   Compare each elements of left and right arrays and put the lowest value in result
  while (leftCounter < left.length && rightCounter < right.length) {
    if (left[leftCounter] < right[rightCounter]) {
      result.push(left[leftCounter]);
      ++leftCounter;
    } else {
      result.push(right[rightCounter]);
      ++rightCounter;
    }
  }
  //   If there are any remaining values, add it to the result arary
  while (leftCounter < left.length) {
    result.push(left[leftCounter]);
    ++leftCounter;
  }
  while (rightCounter < right.length) {
    result.push(right[rightCounter]);
    ++rightCounter;
  }
  return result;
};

const reversedFib = document.createElement("p");
const reverseFibSeq = sequence.reverse();
reversedFib.textContent = `Reversed Fibonacci: ${reverseFibSeq}`;
body.appendChild(reversedFib);
console.log(`Reversed Fibonacci: ${reverseFibSeq}`);

const array = document.createElement("p");
const sortedFib = mergeSort(reverseFibSeq);
array.textContent = `Sorted Reversed Fibonacci: ${sortedFib}`;
body.appendChild(array);
console.log(`Sorted Reversed Fibonacci: ${sortedFib}`);
