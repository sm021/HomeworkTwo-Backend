
//Problem 1 - Prints Fizz when number is divisible by 3 and it prints FizzBuzz when the number is divisible by 5.

let divByFive = '';
let divByThree = '';
let number = 0;

for ( let i = 1 ; i <= 100; i++)  {
    if ( Number.isInteger( i / 3) === true) {
      divByThree = 'Fizz'
      console.log(divByThree);
    } else if ( Number.isInteger( i / 5) === true)  {
      divByFive = 'FizzBuzz'
      console.log(divByFive);
    } else {
      number = i;
      console.log(number);
    }
}
