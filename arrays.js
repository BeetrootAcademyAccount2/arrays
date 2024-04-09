const numberArray = [3, 4, 5, 1, 2];

const strRandom = "Very long string";

// console.log(strRandom.length);
// console.log(numberArray.length);
// console.log(fruits[fruits.length - 2]);

// const strRandomArray = strRandom.split("r");

// const url = "www.mysite.com/order/order/123212";
// const urlArray = url.split("/");
// console.log(urlArray[urlArray.length - 1]);

// const fruits = ["apple", "pear", "melon", "peach", "pomelo"];
const additionalFruits = ["grape", "pineapple"];
const users = [
  { name: "James", age: 30, position: "Salesman" },
  { name: "Alex", age: 36, position: "Janitor" },
  { name: "Steven", age: 32, position: "CEO" },
];

//Modify Original array
//const returnValue = fruits.reverse();

// const returnValue = fruits.push(...additionalFruits);
// const returnValue = fruits.pop();
// const returnValue = fruits.unshift("grape");
// const returnValue = fruits.splice(2, 2);
//const returnValue = fruits.sort();
//const returnValue = numberArray.sort().reverse();
//const returnValue = numberArray.sort((a, b) => a-b);
//const returnValue = fruits.sort((a, b) => a.localeCompare(b));
// const returnValue = users.sort((a, b) => b.age - a.age);
// const returnValue = users.sort((a, b) => b.name.localeCompare(a.name));
//const returnValue = fruits.fill("pineapple", 2, 4);

//Does not modify original array

const fruits = ["apple", "pear", "melon", "peach", "pomelo"];

// const returnValue = fruits.slice(1, 3);
//const returnValue = fruits.concat(additionalFruits);
// const returnValue = fruits.map((fruit, index) => index + "." + fruit);
// const returnValue = fruits.at(3);
//const returnValue = fruits.find((fruit) => fruit.charAt(0) === "p");
// const returnValue = users.find((user) => user.age > 35);
// const returnValue = fruits.filter((fruit) => fruit.charAt(0) === "p");
// const returnValue = fruits.indexOf("peach");
// const returnValue = fruits.join("-");
// const returnValue = fruits.findIndex((fruit) => fruit.charAt(0) === "p");

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for (let fruit of fruits) {
//   console.log(fruit);
// }

let newFruitArray = [];

fruits.forEach((fruit) => {
  if (fruit.charAt(0) === "p") {
    newFruitArray.push(fruit);
  }
});

// newFruitArray = fruits.slice();
// newFruitArray = fruits.concat();
// newFruitArray = [...fruits, "watermelon"];
// newFruitArray = Array.from(fruits);

newFruitArray.push("grape");
console.log(fruits);
console.log(newFruitArray);
// console.log(fruits);
// console.log(returnValue);
