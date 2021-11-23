function getAverageOfArray(arr) { //평균 구하는 함수
    let sum = 0; //총합
    let avg = 0; //평균
    for (let i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    avg = sum / arr.length;
    return avg;
}

const scores1 = [1, 2, 3, 4, 5];
const scores2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
const scores3 = [110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250]

console.log(getAverageOfArray(scores1));
document.write('Arrangement [',scores1, "] 's average is " ,getAverageOfArray(scores1));
console.log(getAverageOfArray(scores2));
document.write('<br>' + 'Arrangement [',scores2, "] 's average is " ,getAverageOfArray(scores2));
console.log(getAverageOfArray(scores3));
document.write('<br>' + 'Arrangement [',scores3, "] 's average is " ,getAverageOfArray(scores3));