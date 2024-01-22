function createGenericStringArray(str1: string, str2: string): Array<string> {
  return [str1, str2];
}

// 補上型別參數
function identity<T>(vlaue: T): T {
  return vlaue;
}
function swapElements<T, U>([arr1, arr2]: [T, U]): [U, T] {
  return [arr2, arr1];
}
const swappedTuple = swapElements(["hello", 10]);
console.log(swappedTuple); // 輸出: [10, "hello"]

function processArray<T>(array: T[], process: (v: T) => T): T[] {
  let newArr = array.map(process);
  return newArr;
}

// 使用這個函式
const processedStrings = processArray(["apple", "banana"], (s) =>
  s.toUpperCase()
);
console.log(processedStrings); // 輸出: ["APPLE", "BANANA"]
