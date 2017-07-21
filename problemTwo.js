// Rounds down to the nearest integer the average input array introduced to the function.

function roundDownNumbers (array) {
  let total = 0;
    for (let i=0; i < array.length; i++)  {
      total =total + array[i];
      average = total/(array.length)

    }
    return Math.floor(average);


}


console.log(roundDownNumbers([6,2,2,2,3]));
