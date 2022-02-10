'Use strict'

// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  // console.log(fruits.toString())
  const result = fruits.join('|');
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  //array1 = new fruits;
  //console.log(array1);
  const result = fruits.split(',', 2);
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const array1 = array.reverse();
  console.log(array1);
  // reverse make reverse og array
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const array1 = array.slice(2, 5);
  console.log(array1);
  //can't use splice (make new array)
  //const result = array.splice(0,2);
  //console.log(result);
  //console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
  //const array1 = students.filter(students => students.score == 90);
  //console.log(array1);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  console.clear()
  const array1 = students.some(students => students.score < 50);
  console.log(array1)

  const result = students.every(students => students.score >= 50);
  console.log(result);
}

// Q9. compute students' average score
{
  //const array1 = students.map(students => students.score)
  const result = students.reduce((student) => {
    const student1 = (student) => student.score
    return student1;
  }
  );
  console.log(result);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}