
//Problem 1 - Prints Fizz when number is divisible by 3 and it prints FizzBuzz when the number is divisible by 5.

let array =[];

for ( var i =1; i <=100; i++) {
  array.push(i)

    for ( j in array) {
      if (Number.isInteger((array[j])/3) === true)  {
        console.log('Fizz');
      } else if (Number.isInteger((array[j])/5) === true)  {
        console.log('FizzBuzz')
      }
        else {
        console.log(array[j])
      }
    }
}
