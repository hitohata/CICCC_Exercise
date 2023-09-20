// 1. Create an array called students, then insert four items, which should be objects and have three properties: name, score1 and score2, with the following values:
// Name	Score 1	Score 2
// John	47	46
// Bob	23	24
// Nick	40	35
// Alex	44	45

const students = [
    {
        name: "John",
        score1: 47,
        score2: 46
    },{
        name: "Bob",
        score1: 23,
        score2: 24
    },{
        name: "Nick",
        score1: 40,
        score2: 34
    }, {
        name: "Alex",
        score1: 44,
        score2: 45
    }
];

// 2. Suppose that, students have a chance to get different degrees of diploma, like A, B, C, D, E and those degrees are relevant to the following passing limits 91, 81, 71, 61, 51. According to that, create two arrays for passing limits and for degrees

const degrees = ["A", "B", "C", "D", "E"];
const limits = [91, 81, 71, 61, 51];


// 3. Create function which will calculate total score (score1 + score2) for each student.

function calculateTotalScore(students) {
    return students.map(student => student = { ...student, total: student.score1 + student.score2 });
}

// 4.Create function and use in it for loops, if else statements and whatever you need, in order to figure out, which student has passed an exam and what kind of degree he has got.

function passedStudentsDegree(students, degrees, limits) {
    const studentWithTotal = calculateTotalScore(students);

    const studentWithDegree = studentWithTotal.map(student => {
        // check the degree by looping limits and degrees array.
        for (let index; index < limits.length; index++) {
            if (student.total > limits[index]) {
                student = { ...student, "degree": degrees[index] };
                return student
            };
        }
        return student
    });

    return studentWithDegree

}

// 5. Display the final result in console.

passedStudentsDegree(students, degrees, limits).forEach(result => {
    console.log("Name:", result.name, "Degree:", result.degree ? result.degree : "Failed", "Total Score:", result.total);
})
