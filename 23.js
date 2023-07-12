let input1 =[
    [1, 2, 3],
    [4, 5, 6],
    [7,  8, 9]
];
let input2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let sum1 = 0;
let sum2 = 0
for (let i = 0; i < input1.length; i++) {
    for (let j = 0; j < input1[i].length; j++) {
    if(i == j)  sum1 += input1[i][j];
    }    
}
for (let i = 0; i < input2.length; i++) {
    for (let j = 0; j < input2[i].length; j++) {
    if(i == j)  sum2 += input1[i][j];
    }    
}
console.log(sum1 - sum2);