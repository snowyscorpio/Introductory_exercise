/*
Hope its ok that i made it into a function, thought it was neater that way ^-^
*/
const countZeros = (arr) => {
  return arr.reduce((count, num) => count + (num === 0), 0);
  //The reduce function goes through the array, adding 1 for each zero it encounters and 0 for every other number, resulting in the total count of zeros at the end
};

const numbers = [0, 2, 0, 3, 0, 5, 0, 0];
console.log(countZeros(numbers));