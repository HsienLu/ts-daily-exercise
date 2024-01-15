"use strict";
/*

在 TypeScript 中，以下哪個是正確宣告數字陣列的方式？
B. let numbers: number[] = [1, 2, 3];
以下哪種方法可以用來向 TypeScript 陣列中添加新元素？
B. push()

如何宣告一個包含字串和數字的 TypeScript 陣列？
B. let values: (string | number)[] = ["Hello", 5];
在 TypeScript 中，pop() 方法的用途是什麼？
B. 刪除陣列的最後一個元素。
以下哪個是 TypeScript 中宣告多維陣列的正確方式？
A. let matrix: number[][] = [[1, 2], [3, 4]];


*/
function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
function findMaxValue(numbers) {
    let max;
    max = Math.max(...numbers);
    return max;
}
function mergeArrays(arr1, arr2) {
    let mergeArray = [];
    mergeArray = [...arr1, ...arr2];
    return mergeArray;
}
