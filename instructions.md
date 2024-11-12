**Title: Insertion Sort with Evens First**

**Objective:**
Write a JavaScript function that sorts an array of numbers using Insertion Sort so that all even numbers are at the beginning of the array in ascending order followed by all odd numbers in ascending order.

**Given the following input:**

```javascript
const inputArray = [6, 3, 4, 7, 2, 1];

console.log("Evens First Sorted Array:", insertionSortEvensFirst(inputArray));
```

For example, after implementing the `insertionSortEvensFirst` function, you should be able to produce the following output:
```javascript
[2, 4, 6, 1, 3, 7]
```

<details>
<summary>Hints</summary>

1. Define a function `insertionSortEvensFirst(arr)` that receives an array `arr`.
2. Sort the array using the Insertion Sort algorithm but modify the comparison to prioritize even numbers.
3. During the sort, if an even number is found, move it before any odd number.
4. After placing all even numbers at the beginning, sort the remaining odd numbers in their portion of the array.
5. Return the array with even numbers sorted at the beginning, followed by sorted odd numbers.
6. Test your function with `inputArray` to ensure even numbers are sorted at the beginning.

Remember, the goal is to modify the standard Insertion Sort to sort even numbers first while still maintaining overall ascending order.

</details>

**Challenge:**

- Ensure the function performs well even with a large number of elements.
- Handle edge cases where the array has only even or only odd numbers.