/*
*************************CODING TASK*********************************

1. Create variables to represent scores of exams for Matt and Simon and set values 80 and 45;
2. Create variable to set the lower limit for passing an exam and assign to it value as 51;
3. Write the condition in if statement, which will check if both students have passed an exam and log
   the result in console;
4. Use else if statement in order to check if one of the students has passed an exam and log the result
   in console;
5. Use else statement in order to display in console that both students have failed;
6. In case of passing the exam by one of the students, find out which one was that and display in console
   as an additional information the student name and his points
7. Test all the possible cases (a. both students passed; b. Matt passed and Simon failed; c. Simon passed and
  Matt failed; d. both students failed).
*/


const scoreMatt = 80;
const scoreSimon = 45;
const passScore = 51;

const matt = {
    name: "Matt",
    score: 0
};

const simon = {
    name: "Simon",
    score: 0
};

const check = (matt, simon, score) => {

    if (matt.score >= score && simon.score >= score) {
        console.log("success")
    } else if (matt.score < score && simon.score >= score) {
        console.log(`matt passed ${matt.score}, simon passed ${simon.score}`);
    } else if (matt.score >= score && simon.score < score) {
        console.log(`simon passed ${simon.score}, matt passed ${matt.score}`);
    } else {
        console.log("failed.");
    }
}

// a. both students passed;
matt.score = 80;
simon.score = 80;
check(matt, simon, 50);

// b. Matt passed and Simon failed;
matt.score = 80;
simon.score = 50;
check(matt, simon, 65);

// c. Simon passed and Matt failed
matt.score = 50;
simon.score = 80;
check(matt, simon, 65);


// d. both students failed
matt.score = 80;
simon.score = 80;
check(matt, simon, 100);
