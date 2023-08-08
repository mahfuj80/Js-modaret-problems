/**
 * ## **Problem 2: Sum of Array Elements**

**Function Name: `sumArray`**

**Step-by-step description:**

1. **Define a function called `sumArray` that takes an array of numbers as an argument.**
2. **Validate that the input is an array and not empty. If it is not an array or empty, return an error message.**
3. **Use a loop to iterate through the array and sum up all the elements.**
4. **Return the total sum.**

**Example:**

```
jsCopy code
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([-1, 5, 2, 7])); // Output: 13
console.log(sumArray("hello")); // Output: "Invalid input! Please provide a valid array of numbers."

```
 */

function sumArray(arr) {
    if (Array.isArray(arr) !== true || arr.length === 0) {
        return 'Give me a valid array';
    } else {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            const index = i;
            if (typeof arr[i] !== 'number') {
                return 'Give me a Number of array';
            } else {
                sum = sum + arr[i];
            }

        }
        return 'Sum of the Array that You given is: ' + sum;
    }
}

const numbers = [3, 3];
console.log(sumArray(numbers));