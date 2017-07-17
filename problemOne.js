

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
