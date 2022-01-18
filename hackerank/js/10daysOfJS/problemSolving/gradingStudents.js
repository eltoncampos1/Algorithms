const isDivisibleBy5 = (num) => {
  let counter = 0;

  while (num % 5 !== 0) {
    num++;
    counter++;
  }

  return counter;
};

function gradingStudents(grades) {
  const newGrades = [];

  grades.forEach((grade) => {
    let difference = isDivisibleBy5(grade);
    let finalGrade = difference + grade;

    if (difference < 3 && finalGrade >= 40) {
      newGrades.push(finalGrade);
    } else {
      newGrades.push(grade);
    }
  });

  return newGrades;
}

let grades = [73, 67, 38, 33];

gradingStudents(grades);
