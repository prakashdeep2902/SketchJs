// function removeDuplicates(arr) {
//   const unique = [];
//   for (let i = 0; i < arr.length; i++) {
//     let d = false;

//     for (j = 0; j < unique.length; j++) {
//       if (arr[i] == unique[j]) {
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
// console.log(removeDuplicates(nums));

// function removeDuplicates(arr) {
//   let unique = [];
//   let seen = {};
//   for (i = 0; i < arr.length; i++) {
//     if (!seen[arr[i]]) {
//       unique.push(arr[i]);
//       seen[arr[i]] = true;
//     }
//   }
//   return unique;
// }

// const nums = [1, 2, 2, 3, 4, 4, 5, 6, 6, 6];
// console.log(removeDuplicates(nums));

// function findSecondMax(arr) {
//   let Max = -Infinity;
//   let secMax = -Infinity;
//   for (let num of arr) {
//     if (num > Max) {
//       secMax = Max;
//       Max = num;
//     } else if (num > secMax && num !== Max) {
//       secMax = num;
//     }
//   }

//   return secMax !== -Infinity ? secMax : null;
// }

// const arr = [1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5];
// console.log(findSecondMax(arr));

function flattenArray(arr) {
  let stach = [...arr];
  let result = [];
  while (stach.length) {
    const item = stach.pop();
    if (Array.isArray(item)) {
      stach.push(...item);
    } else {
      result.unshift(item);
    }
  }

  return result;
}

const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7]
