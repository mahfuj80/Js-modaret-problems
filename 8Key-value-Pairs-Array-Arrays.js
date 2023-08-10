/**
 * ## **Problem 8: Object Key-Value Pairs to Array of Arrays**

**Function Name: `objectToArray`**

**Step-by-step description:**

1. **Define a function called `objectToArray` that takes an object as an argument.**
2. **Validate that the input is an object and not empty. If it is not an object or empty, return an error message.**
3. **Convert the key-value pairs of the object into an array of arrays, where each inner array contains the key and its corresponding value.**
4. **Return the array of arrays.**

**Example:**

```
jsCopy code
console.log(objectToArray({ name: "John", age: 25, city: "New York" }));
// Output: [["name", "John"], ["age", 25], ["city", "New York"]]
console.log(objectToArray("hello")); // Output: "Invalid input! Please provide a valid object."

Save to grepper

```
 */

function objectToArray(information) {
    if (typeof information !== 'object' || Object.keys(information).length === 0) {
        return "Invalid input! Please provide a valid object."
    } else {
        return Object.entries(information);
    }


}

const object = {
    name: "John",
    age: 25,
    city: "New York"
}

console.log(objectToArray(object));