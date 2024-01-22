"use strict";
function createGenericStringArray(str1, str2) {
    return [str1, str2];
}
// 補上型別參數
function identity(vlaue) {
    return vlaue;
}
function swapElements([arr1, arr2]) {
    return [arr2, arr1];
}
const swappedTuple = swapElements(["hello", 10]);
console.log(swappedTuple); // 輸出: [10, "hello"]
function processArray(array, process) {
    let newArr = array.map(process);
    return newArr;
}
// 使用這個函式
const processedStrings = processArray(["apple", "banana"], (s) => s.toUpperCase());
console.log(processedStrings); // 輸出: ["APPLE", "BANANA"]
