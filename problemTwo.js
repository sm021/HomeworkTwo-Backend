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






/*(function () {
    const students = [
        {
            name: 'Jim',
            homeworkScores: [90, 75, 82, 94],
            testScores: [98, 87]
        },
        {
            name: 'Maria',
            homeworkScores: [66, 83, 91, 93],
            testScores: [85, 88]
        },
        {
            name: 'Pam',
            homeworkScores: [92, 87, 85, 91],
            testScores: [89, 78]
        },
        {
            name: 'Fernando',
            homeworkScores: [83, 71, 92, 100],
            testScores: [95, 91]
        }
    ];
    function gradeStudents (students) {


        for (i in students) {
          for (j in students[i])  {
            if ( students[i][j] === students[i].name) {
            console.log('Student Name : ' + students[i].name)
          } else if ( students[i][j]  === students[i].homeworkScores) {
              var totalHomeworkScore = 0;
            for (homework in students[i][j])  {
              totalHomeworkScore=totalHomeworkScore + (students[i].homeworkScores[homework])/students[i][j].length;
            }
              console.log('Average Homework Score = ' + totalHomeworkScore);

          } else if (students[i][j] === students[i].testScores) {
              var totalTestScores = 0;
            for (test in students[i][j])  {
              totalTestScores =totalTestScores + (students[i].testScores[test])/(students[i].testScores.length);
            }
            console.log('Average Test Score = ' + totalTestScores);
            }
          }
            var result = Object.getOwnPropertyNames(students[i]).length-1;
          if ((totalTestScores + totalHomeworkScore)/(result) >= 90) {
            grade = 'A'
            console.log(grade)
          } else {
            grade = 'Less than A'
            console.log(grade)
          }
          var studentGrade = [];
          studentGrade[students[i].name]= grade;
          console.log(studentGrade);
        }
        };

        gradeStudents(students);
    })(); */

/*let array =[];

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
}*/
