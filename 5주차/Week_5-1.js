//Standard Deviation
const studentnum = parseInt(prompt("Input number of students : "));
const array = [];
const array2=[];
let i,sum,sum2,varian,sd = 0;

for (i = 0; i < studentnum; i++) 
{
    const score = parseInt(prompt("Input Score : "));
    array.push(score); //학생 수 만큼 루프 돌려서 array 배열마다 각각 점수 입력
}
for (let i = 0; i < studentnum; i++) {
    sum += array[i];
}
const average = sum / studentnum; //평균 : 전체 총합 나누기 학생 수
console.log(average)

for(let i=0; i<studentnum; i++){
    array2.push((average-array[i])*(average-array[i]));
}

for(i=0; i<studentnum; i++){
    sum2 += array2[i];
}
varian = sum2 / studentnum;
sd=Math.sqrt(varian); //varian의 제곱근을 반환
document.write("Standard Deviation : " + sd);