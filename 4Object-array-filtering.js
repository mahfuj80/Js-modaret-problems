/**
 * ## **Problem 4: Object Array Filtering**

**Function Name: `filterStudents`**

**Step-by-step description:**

1. **Define a function called `filterStudents` that takes an array of student objects as an argument. Each object will have properties like `name`, `age`, and `grade`.**
2. **Validate that the input is an array and not empty. If it is not an array or empty, return an error message.**
3. **Use a loop or any array method to filter out students who are below 18 years old and have a grade lower than or equal to 70.**
4. **Return an array containing only the filtered student objects.**

**Example:**

```
jsCopy code
const students = [
  { name: "John", age: 20, grade: 85 },
  { name: "Alice", age: 17, grade: 60 },
  { name: "Bob", age: 22, grade: 72 },
  { name: "Eve", age: 15, grade: 90 },
];

console.log(filterStudents(students));
// Output: [{ name: "John", age: 20, grade: 85 }, { name: "Bob", age: 22, grade: 72 }]
console.log(filterStudents("hello")); // Output: "Invalid input! Please provide a valid array of student objects."

```
 */

function filterStudents(arr) {
    if (Array.isArray(arr) !== true || arr.length < 1) {
        return 'Invalid input! Please provide a valid array of student objects.';
    } else {
        const validArr = [];
        for (let i = 0; i < arr.length; i++) {
            const index = i;
            const element = arr[index];
            const age = element.age;
            const grade = element.grade;
            if (grade >= 70 && age > 18) {
                validArr.push(arr[i]);
            }
        }
        return validArr;
    }
}

const students = [
    { name: "John", age: 20, grade: 85 },
    { name: "Alice", age: 17, grade: 60 },
    { name: "Bob", age: 22, grade: 72 },
    { name: "Eve", age: 15, grade: 90 },
];

console.log(filterStudents(students));