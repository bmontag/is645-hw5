/*
    HW5 - Ex3
*/

//Declare studentList Array
const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];

// TO DO - Write higher order functions / There are many solutions
function minScore(scores) {
    return Math.min(...scores)
}

function maxScore(scores) {
    return Math.max(...scores)
}

function avgScore(scores) {
    return scores.reduce((acc, cur) =>  acc + cur) / scores.length;
}

//Declare cLastNameResults.  Use functions and map a new array of objects
const cLastNameResults = studentList
    .map(student => ({
        firstName: student.firstName,
        lastName: student.lastName,
        minScore: minScore(student.scores),
        maxScore: maxScore(student.scores),
        avgScore: avgScore(student.scores)
    }));

//Output
console.log(cLastNameResults);

