let counter = 0;
const inception = () => {
  if (counter > 3) {
    return 'done';
  }
  counter++;
  return inception();
};

// console.log(inception());

/**
 *  3 Parts of a recursive function to avoid stack overflow
 *
 *  1. Identify the base case
 *
 *  2. Identify the recursive case
 *
 *  3. Get closer and close and return when neede. usually you have 2 returns
 *  one for the base case and the other for the recursive case
 */

let answer = 1;
const factorialRecursive = number => {
  if (typeof number !== 'number') {
    return 'Not a number';
  }
  if (number === 2) {
    return 2;
  }
  return number * factorialRecursive(number - 1);
};

const factorialIterative = number => {
  if (typeof number !== 'number') {
    return 'Not a number';
  }
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
};

console.log('Recursive', factorialRecursive(7));
console.log('Iterative', factorialIterative(7));

/**
 *  When to use Recursion
 *
 *  Better when it comes to traversal, or searching through trees or graphs. Recursion is better than
 *  an iterative approach. It is also preferred in some sorting algorithms.
 *
 *  Every time you are using a tree or converting somethign int oa treee, consider recursion.
 *    1. Divided into a number of subproblems that are smaller instances of the same problem.
 *    2. Each instance of the subproblem is identiacal in nature.
 *    3. The solutions of each subproblem can be combined to solve the problems
 */
