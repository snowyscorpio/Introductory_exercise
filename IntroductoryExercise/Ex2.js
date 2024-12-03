/*
Hope its ok that i made it into a function, thought it was neater that way ^-^
*/
const checkIfPrimes = (limit) => {
  for (let num = 2; num < limit; num++) {
    let isPrime = true; // Assuming the number is prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
      // If num is divisible by some integer, it must have a divisor that is less than or equal to its square root.
      if (num % i === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      console.log(num);
    }
  }
};


checkIfPrimes(237);
