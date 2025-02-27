// const arr = [1, 2, 3];

// // map() returns a new array
// const mappedArray = arr.map((num) => num * 2);
// console.log(mappedArray); // [2, 4, 6]

// // forEach() does not return a new array
// const result = arr.forEach((num) => console.log(num * 2));
// console.log(result); // undefined

// const reduceArray = [1, 2, 3, 4, 5, 6];

// const result1 = reduceArray.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);

// console.log(result1);

// // finding the max value of array

// const numbers = [10, 50, 30, 80, 20];

// const max = numbers.reduce((acc, curr) => {
//   return acc > curr ? acc : curr;
// }, numbers[0]);

// console.log(max);

// function removeDuplicates(arr) {
//   let unique = [];
//   for (let i = 0; i < arr.length; i++) {
//     let d = false;
//     for (j = 0; j < unique.length; j++) {
//       if (arr[i] === unique[j]) {
//         d = true;
//         break;
//       }
//     }
//     if (!d) {
//       unique.push(arr[i]);
//     }
//   }
//   return unique;
// }
// const nums = [1, 2, 2, 3, 4, 4, 5, 6, 6, 6];
// console.log(removeDuplicates(nums)); // Output: [1, 2, 3, 4, 5, 6]

// function removeDuplicates(arr) {
//   let uniqueArr = [];
//   let seen = {};

//   for (let i = 0; i < arr.length; i++) {
//     console.log(uniqueArr);
//     console.log(seen);
//     if (!seen[arr[i]]) {
//       uniqueArr.push(arr[i]);
//       seen[arr[i]] = true;
//     }
//   }
//   return uniqueArr;
// }

// const nums = [1, 2, 2, 3, 4, 4, 5, 6, 6, 6];
// console.log(removeDuplicates(nums)); // Output: [1, 2, 3, 4, 5, 6]

// function removeDuplicates(arr) {
//   return arr.filter((value, index) => arr.indexOf(value) === index);
// }

// const nums = [1, 2, 2, 3, 4, 4, 5, 6, 6, 6];
// console.log(removeDuplicates(nums)); // Output: [1, 2, 3, 4, 5, 6]

// function findSecondMax(arr) {
//   let Max = -Infinity;
//   let sMax = -Infinity;

//   for (let num of arr) {
//     if (num > Max) {
//       sMax = Max;
//       Max = num;
//     } else if (num > sMax && num != Max) {
//       sMax = num;
//     }
//   }

//   return sMax !== -Infinity ? sMax : null;
// }

// const arr = [10, 20, 4, 45, 99, 20, 10];
// console.log(findSecondMax(arr)); // Output: 45

// function moveFirstKElements(arr, k) {
//   return [...arr.slice(k), ...arr.slice(0, k)];
// }

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;
// console.log(moveFirstKElements(arr, k)); // Output: [4, 5, 6, 7, 1, 2, 3]

function flattenArray(arr) {
  let stack = [...arr];
  console.log(stack);
  let result = [];
  while (stack.length) {
    const item = stack.pop();

    if (Array.isArray(item)) {
      stack.push(...item);
    } else {
      result.unshift(item);
    }

    console.log("result::", result);
  }
}

const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7]
