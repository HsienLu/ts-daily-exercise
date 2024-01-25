function getObjValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

type student = {
  name: string;
  age: number;
  major: string;
};

// 建立一個學生物件
const student: student = {
  name: "小明",
  age: 20,
  major: "資訊工程",
};

// 直接從學生物件中取出各個屬性的值
const studentName = getObjValue(student, "name"); // 這裡 studentName 會是 any 型別
const studentAge = getObjValue(student, "age"); // 這裡 studentAge 會是 any 型別
const studentMajor = getObjValue(student, "major"); // 這裡 studentMajor 會是 any 型別

// 在 console 中輸出學生的資訊
console.log(`學生姓名: ${studentName}`);
console.log(`學生年齡: ${studentAge}`);
console.log(`學生主修: ${studentMajor}`);

// 建立一個課程物件
type course = {
  title: string;
  credits: number;
  isRequired: boolean;
};
const course = {
  title: "程式設計",
  credits: 3,
  isRequired: true,
};

// 直接從課程物件中取出各個屬性的值
const courseTitle = getObjValue(course, "title"); // 這裡 courseTitle 會是 any 型別
const courseCredits = getObjValue(course, "credits"); // 這裡 courseCredits 會是 any 型別
const courseIsRequired = getObjValue(course, "isRequired"); // 這裡 courseIsRequired 會是 any 型別

console.log(`課程名稱: ${courseTitle}`);
console.log(`學分數: ${courseCredits}`);
console.log(`是否為必修: ${courseIsRequired ? "是" : "否"}`);
