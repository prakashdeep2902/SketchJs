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

Securing RESTful APIs and optimizing performance in React go beyond just lazy loading. Here’s how you can handle both effectively:

---

### **1. Securing RESTful APIs in React**

Since React is a frontend framework, securing APIs primarily involves:

#### **A. Authentication & Authorization**

- Use **JWT (JSON Web Token)** or **OAuth** for API authentication.
- Store JWT securely:
  - **Best Practice**: Store tokens in **httpOnly cookies** (prevents XSS attacks).
  - **Alternative**: Store in **memory (React state)** for higher security.
  - **Avoid**: LocalStorage or sessionStorage (prone to XSS attacks).

#### **B. Handling API Requests Securely**

- Use **Axios interceptors** to attach tokens to requests:
  ```js
  axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${yourAccessToken}`;
    return config;
  });
  ```
- Implement **rate limiting** on the backend to prevent abuse.

#### **C. Prevent API Misuse**

- Use **CORS policies** to restrict API access to allowed origins.
- Implement **CSRF protection** when using cookies for authentication.
- Encrypt sensitive data before sending it over the network.

---

### **2. Performance Optimization Beyond Lazy Loading**

#### **A. Code Splitting & Dynamic Imports**

- Split code at the route level or component level using `React.lazy` and `Suspense`:

  ```js
  const Dashboard = React.lazy(() => import("./Dashboard"));

  function App() {
    return (
      <Suspense fallback={<Loader />}>
        <Dashboard />
      </Suspense>
    );
  }
  ```

#### **B. Memoization & Avoiding Unnecessary Renders**

- Use `React.memo` for components that do not frequently change.
- Use `useCallback` for functions and `useMemo` for computed values:
  ```js
  const expensiveCalculation = useMemo(() => computeHeavyTask(data), [data]);
  ```

#### **C. Optimizing API Calls**

- Implement **debouncing & throttling** for API requests:
  ```js
  const debouncedSearch = useCallback(debounce(handleSearch, 300), []);
  ```
- Use **SWC (Service Workers Cache) or React Query** for caching API responses.
  ```js
  const { data } = useQuery("userData", fetchUserData);
  ```

#### **D. Virtualization for Large Lists**

- Use **React Virtualized** or **React Window** for rendering large lists efficiently.

  ```js
  import { FixedSizeList } from "react-window";

  <FixedSizeList height={400} itemCount={items.length} itemSize={50}>
    {({ index, style }) => <div style={style}>{items[index]}</div>}
  </FixedSizeList>;
  ```

#### **E. Optimizing Image & Asset Loading**

- Use **WebP format** for images.
- Implement **lazy loading with `loading="lazy"`** for images:
  ```js
  <img src="image.webp" loading="lazy" alt="Optimized Image" />
  ```
- Use a **CDN** (Content Delivery Network) for serving assets.

---

### **Final Thoughts**

By securing API calls and optimizing performance at multiple levels, you ensure that your React app is not only fast but also secure. Do you want help implementing any of these in your project? 🚀

### **Storing JWT in httpOnly Cookies (Best Practice) in React + Node.js**

To securely store JWT tokens in **httpOnly cookies**, follow these steps:

---

## **1. Backend (Node.js + Express)**

We will create an authentication route that sets a **secure httpOnly cookie**.

### **A. Install Required Packages**

```sh
npm install express jsonwebtoken cookie-parser cors dotenv
```

### **B. Setup Express Server**

```js
require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cookieParser());

// Allow frontend requests (adjust for production)
app.use(
  cors({
    origin: "http://localhost:3000", // React frontend URL
    credentials: true, // Allow cookies to be sent
  })
);

const users = [{ id: 1, username: "goutham", password: "password" }];

const generateToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

// **Login Route**
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const token = generateToken(user);

  // **Set JWT in httpOnly Cookie**
  res.cookie("token", token, {
    httpOnly: true, // Prevent JavaScript access (XSS protection)
    secure: process.env.NODE_ENV === "production", // Use Secure flag in production
    sameSite: "strict", // Prevent CSRF attacks
    maxAge: 60 * 60 * 1000, // 1 hour
  });

  res.json({ message: "Logged in successfully" });
});

// **Protected Route**
app.get("/profile", (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ message: "Access granted", userId: decoded.id });
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
});

// **Logout Route (Clearing Cookie)**
app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
```

---

## **2. Frontend (React)**

### **A. Install Axios**

```sh
npm install axios
```

### **B. Configure Axios for Cookies**

```js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true, // Allow cookies to be sent
});

export default API;
```

### **C. Implement Login in React**

```js
import { useState } from "react";
import API from "./api"; // Axios instance

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const res = await API.post("/login", credentials);
      alert(res.data.message);
    } catch (error) {
      console.error("Login error", error);
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
```

### **D. Fetch Protected Data**

```js
const fetchProfile = async () => {
  try {
    const res = await API.get("/profile");
    console.log(res.data);
  } catch (error) {
    console.error("Unauthorized", error);
  }
};
```

### **E. Logout User**

```js
const handleLogout = async () => {
  await API.post("/logout");
  alert("Logged out successfully");
};
```

---

## **3. Why This is Secure?**

✅ **httpOnly Cookie:** JavaScript cannot access the token, preventing **XSS attacks**.  
✅ **SameSite=Strict:** Prevents **CSRF attacks**.  
✅ **Secure Cookie in Production:** Only sent over HTTPS.  
✅ **CORS Config with `credentials: true`** ensures cookies work across frontend & backend.

Would you like to add **refresh tokens** for better security? 🚀

Sure! Here's a brief explanation of `slice` and `splice` with examples:

### **1. `slice()`**

- The `slice()` method is used to **extract a portion** of an array and **return a new array** (it does not modify the original array).
- It can take **two arguments**:
  - **`start`**: The index to begin extraction (inclusive).
  - **`end`** (optional): The index to stop extraction (exclusive). If not provided, it extracts until the end of the array.

#### **Example of `slice()`**:

```js
const arr = [1, 2, 3, 4, 5];

const newArr = arr.slice(1, 4); // Extracts from index 1 to index 3 (4 is excluded)
console.log(newArr); // Output: [2, 3, 4]

console.log(arr); // Original array remains unchanged: [1, 2, 3, 4, 5]
```

- **`arr.slice(1, 4)`** extracts elements from index `1` to `3` (inclusive of `1`, exclusive of `4`).
- It does **not modify** the original array, it returns a new array.

---

### **2. `splice()`**

- The `splice()` method is used to **modify the array in place**. It can **remove, add, or replace elements**.
- It takes at least **two arguments**:
  - **`start`**: The index where to begin modifying the array.
  - **`deleteCount`**: The number of elements to remove from the array (optional).
  - **`items`** (optional): Items to add to the array at the specified position (optional).

#### **Example of `splice()`**:

```js
const arr = [1, 2, 3, 4, 5];

// Remove 2 elements starting at index 1
const removedItems = arr.splice(1, 2);
console.log(removedItems); // Output: [2, 3]
console.log(arr); // Output: [1, 4, 5]  (array modified)

// Add 6 and 7 at index 1
arr.splice(1, 0, 6, 7);
console.log(arr); // Output: [1, 6, 7, 4, 5]  (array modified)
```

- **`arr.splice(1, 2)`**: Removes 2 elements starting from index `1`. The removed elements are returned as a new array.
- **`arr.splice(1, 0, 6, 7)`**: Adds `6` and `7` starting at index `1` without removing any elements.

### **Key Differences**:

- **`slice()`**: Returns a new array, doesn't modify the original array.
- **`splice()`**: Modifies the original array in place and returns an array of removed elements (if any).

---

Let me know if you need more examples or further explanation! 😊

To move **k elements** in an array, there are typically two interpretations:

1. **Move the first k elements to the end** of the array.
2. **Move the last k elements to the front** of the array.

We’ll cover both of these scenarios below.

---

### **1. Move the First k Elements to the End of the Array**

This means you want to shift the first `k` elements to the end of the array, and the rest should remain in their original order.

#### **Example:**

- Input: `[1, 2, 3, 4, 5, 6, 7]`, k = 3
- Output: `[4, 5, 6, 7, 1, 2, 3]`

#### **Implementation:**

```js
function moveFirstKElements(arr, k) {
  const n = arr.length;

  // Handle k greater than array length
  k = k % n; // In case k is larger than the length of the array

  const movedArr = [...arr.slice(k), ...arr.slice(0, k)]; // Combine the array parts

  return movedArr;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log(moveFirstKElements(arr, k)); // Output: [4, 5, 6, 7, 1, 2, 3]
```

### **Explanation:**

- `arr.slice(k)` takes the elements from index `k` to the end of the array.
- `arr.slice(0, k)` takes the first `k` elements.
- Combining them with the spread operator (`...`) gives the desired result.

---

### **2. Move the Last k Elements to the Front of the Array**

This means you want to shift the last `k` elements to the front of the array, and the rest of the elements should stay in the same order.

#### **Example:**

- Input: `[1, 2, 3, 4, 5, 6, 7]`, k = 3
- Output: `[5, 6, 7, 1, 2, 3, 4]`

#### **Implementation:**

```js
function moveLastKElements(arr, k) {
  const n = arr.length;

  // Handle k greater than array length
  k = k % n; // In case k is larger than the length of the array

  const movedArr = [...arr.slice(n - k), ...arr.slice(0, n - k)]; // Combine the array parts

  return movedArr;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log(moveLastKElements(arr, k)); // Output: [5, 6, 7, 1, 2, 3, 4]
```

### **Explanation:**

- `arr.slice(n - k)` extracts the last `k` elements of the array.
- `arr.slice(0, n - k)` takes the first `n - k` elements.
- By combining them, the last `k` elements are moved to the front.

---

### **3. Edge Case Handling**

- If `k` is larger than the array's length, we take `k % arr.length` to handle cases where `k` exceeds the array length.
- If `k == 0`, no change will occur to the array.
- If `k == arr.length`, the array stays unchanged after the operation.

---

Let me know if you'd like to modify this further or need help with another variation!
