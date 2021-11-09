const input1 = parseInt(prompt("Enter the score of the first person : "));
const input2 = parseInt(prompt("Enter the score of the second person : "));
const input3 = parseInt(prompt("Enter the score of the third person : "));
const score = new Array();
score[0] = input1;
score[1] = input2;
score[2] = input3;
const avg = (score[0] + score[1] + score[2]) / 3
document.write("<br />"+input1+ " + " + input2 + " + " + input3);
document.write("<br/>Average : " + avg);
console.log(avg);