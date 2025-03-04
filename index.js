const string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

//Part 2: Expanding Functionality

const lines = string.split("\n");
let data = [];
let row;

for (let i = 0; i < lines.length; i++) {
  row = lines[i].split(",");
  data.push(row);
}

let numOfColumns = row.length; //Declare a variable that stores the number of columns in each row of data within the CSV.

console.log(data);

// Store your results in a two-dimensional array. =>data

//Part 3: Transforming Data

// For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.

let people = [];

for (let i = 1; i < data.length; i++) {
  //i=1, not 0, to exclude top row of data
  let person = {};
  person.id = data[i][0];
  person.name = data[i][1];
  person.occupation = data[i][2];
  person.age = data[i][3];
  people.push(person);
  // couldn't figure out how to dynamically set the property names so i set them explicitly
}
console.log(people);

//Part 4: Sorting and Manipulating Data

//It is important to know how to work with data in this format, an array of objects, as it is one of the most commonly used data formats in JavaScript.
// Using array methods, accomplish the following tasks, in order upon the result of Part 3:

// Remove the last element from the sorted array.
people.pop();

// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
let barry = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
people.splice(1, 0, barry);

//Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }
let bilbo = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
people.push(bilbo);
console.log(people);

//Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.
let total = 0;
let average = 0;
people.forEach((person) => {
  total += Number(person.age);
  average = total / people.length;
});
console.log(average);

//Part 5: Full Circle

// As a final task, transform the final set of data back into CSV format.

let csv = [];

for (const person in people) {
  let x = [
    `${people[person].id},${people[person].name},${people[person].occupation},${people[person].age}\\n`,
  ];
  csv.push(x);
}

// console.log(csv.join());

let newArr = [];
for (const key in people[0]) {
  //first row of csv
  newArr += key + ",";
}

fullCircle = newArr.concat("\\n" + csv).slice(0, -2);

console.log(fullCircle);
