var [name1, score1] = prompt("Please enter the name of the first student and the math score. : ").split(" ")
var [name2, score2] = prompt("Please enter the name of the second student and the math score. : ").split(" ")
const students = [
    { name : name1, math : score1 },
    { name : name2, math : score2 },
];
document.write("<br />" + students[0].name + "'s math score is " + students[0].math);
document.write("<br />" + students[1].name + "'s math score is " + students[1].math);