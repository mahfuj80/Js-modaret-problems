/**
 * ## **Problem 6: Remove Duplicates from an Array**

**Function Name: `removeDuplicates`**

**Step-by-step description:**

1. **Define a function called `removeDuplicates` that takes an array of elements as an argument.**
2. **Validate that the input is an array. If it is not an array, return an error message.**
3. **Use the `Set` data structure to remove duplicate elements from the array.**
4. **Convert the `Set` back to an array and return it.**

**Example:**

```
jsCopy code
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates({ a: 1, b: 2, c: 3 })); // Output: "Invalid input! Please provide a valid array."

Save to grepper

```
 */

function removeDuplicates(arr) {
    if (Array.isArray(arr) !== true || arr.length < 1) {
        return "Invalid input! Please provide a valid array.";
    } else {
        let filtered = [];

        for (let i = 0; i < arr.length; i++) {
            let currentElement = arr[i];
            if (!filtered.includes(currentElement)) {
                filtered.push(currentElement);
            }
        }
        return filtered;
    }
}


const array = [1, 2, 3, 3, 4, 4, 5, 5, 6];
console.log(removeDuplicates(array));


// let num = [1, 2, 3, 3, 4, 4, 5, 5, 6];
// let filtered = num.filter((a, b) => num.indexOf(a) === b)
// console.log(filtered);

