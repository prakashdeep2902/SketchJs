The key differences between `map()` and `forEach()` in JavaScript are:

1. **Return Value**:

   - `map()` **returns a new array** with transformed elements.
   - `forEach()` **does not return anything** (returns `undefined`).

2. **Chaining**:

   - Since `map()` returns an array, you can **chain** other array methods like `.filter()`, `.reduce()`.
   - `forEach()` does not return an array, so it **cannot be chained**.

3. **Usage**:
   - Use `map()` when you **want a new array** with modified values.
   - Use `forEach()` when you **just want to iterate** and perform operations like logging or updating existing data.

### Example:

```javascript
const arr = [1, 2, 3];

// map() returns a new array
const mappedArray = arr.map((num) => num * 2);
console.log(mappedArray); // [2, 4, 6]

// forEach() does not return a new array
const result = arr.forEach((num) => console.log(num * 2));
console.log(result); // undefined
```

In short, **use `map()` if you need an array; use `forEach()` if you don’t.**

### **What is the `reduce()` Method in JavaScript?**

The `reduce()` method is used to **reduce an array to a single value** (such as a sum, product, or object). It executes a callback function on each element of the array, passing an **accumulator** and the **current element**.

### **Syntax**

```javascript
array.reduce((accumulator, currentValue) => {
  // logic
  return updatedAccumulator;
}, initialValue);
```

- `accumulator` → Holds the accumulated result (initially set to `initialValue`).
- `currentValue` → The current element being processed.
- `initialValue` → (Optional) The initial value of the accumulator.

---

### **Example 1: Sum of Array Elements**

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // Output: 15
```

**Explanation:**

1. Start with `acc = 0` (initial value).
2. Add each `curr` to `acc`:
   - `0 + 1 = 1`
   - `1 + 2 = 3`
   - `3 + 3 = 6`
   - `6 + 4 = 10`
   - `10 + 5 = 15`

---

### **Example 2: Finding the Maximum Value in an Array**

```javascript
const numbers = [10, 50, 30, 80, 20];

const max = numbers.reduce(
  (acc, curr) => (curr > acc ? curr : acc),
  numbers[0]
);

console.log(max); // Output: 80
```

**Explanation:**

- The accumulator (`acc`) starts with the first number (`10`).
- It compares each `curr` with `acc`, keeping the larger value.

---

### **Example 3: Grouping Data into an Object**

```javascript
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Alice", age: 28 },
];

const groupedByName = people.reduce((acc, person) => {
  if (!acc[person.name]) {
    acc[person.name] = [];
  }
  acc[person.name].push(person);
  return acc;
}, {});

console.log(groupedByName);
/*
Output:
{
  Alice: [{ name: "Alice", age: 25 }, { name: "Alice", age: 28 }],
  Bob: [{ name: "Bob", age: 30 }]
}
*/
```

**Explanation:**

- If the name is not already a key in `acc`, initialize it as an empty array.
- Push each person into their respective group.

---

### **When to Use `reduce()`?**

✅ When you need a **single output value** (sum, max, average, object, etc.).  
✅ When transforming an array **into an object** or another data structure.

---

**Key Takeaway**:

- **Use `reduce()` when you need to accumulate values into a single result!**
- It’s more **powerful** than `map()` and `forEach()` for operations that require aggregation. 🚀

If you want to remove duplicates using the `filter()` method **without using `Set`**, you can do it like this:

### **Using `filter()` and `indexOf()`**

```javascript
function removeDuplicates(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

const nums = [1, 2, 2, 3, 4, 4, 5, 6, 6, 6];
console.log(removeDuplicates(nums)); // Output: [1, 2, 3, 4, 5, 6]
```

---

### **Explanation:**

1. `arr.indexOf(value)` returns the **first occurrence index** of `value` in the array.
2. The `filter()` method keeps only the **first occurrence** and removes duplicates.
3. If the current `index` does not match `indexOf(value)`, it means it's a duplicate and gets filtered out.

🔹 **Time Complexity:** `O(n^2)` (because `indexOf()` runs in `O(n)`, making it less efficient for large arrays).  
🔹 **Space Complexity:** `O(n)` (new array is created).

For better performance, use **object-based (`O(n)`) approach** instead. 🚀

Yes! You can remove duplicates without using `indexOf()` by using the **`filter()` method with an object (hash map)** to track seen values.

---

### **Using `filter()` and Object (No `indexOf()`)**

```javascript
function removeDuplicates(arr) {
  let seen = {}; // Object to track unique values

  return arr.filter((value) => {
    if (!seen[value]) {
      seen[value] = true; // Mark as seen
      return true; // Keep the value
    }
    return false; // Filter out duplicates
  });
}

const nums = [1, 2, 2, 3, 4, 4, 5, 6, 6, 6];
console.log(removeDuplicates(nums)); // Output: [1, 2, 3, 4, 5, 6]
```

---

### **Explanation:**

1. `seen` is an **empty object** that keeps track of unique values.
2. The `filter()` method iterates over the array:
   - If `value` is **not in `seen`**, add it and keep the value.
   - If `value` **already exists** in `seen`, filter it out.
3. This avoids using `indexOf()`, making it more **efficient**.

✅ **Time Complexity:** `O(n)` (Better than `O(n^2)` from `indexOf()`).  
✅ **Space Complexity:** `O(n)` (For storing unique elements in an object).

This is an **optimized approach** compared to using `indexOf()`! 🚀
