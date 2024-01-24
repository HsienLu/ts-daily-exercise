"use strict";
//題目一：計算陣列總和
//開發一個函式 calculateSum，並接受一個數字陣列作為參數，來計算出其總和。請使用泛型約束來確保傳入的參數必須是數字陣列。
function calculateSum1(arr) {
    let sum = 0;
    arr.map((v) => {
        sum += v;
    });
    return sum;
}
// 請調整為泛型函式，並使用 WithName 做為泛型約束條件，確保每個物件至少包含該屬性。
function filterItems(items) {
    return items.filter((item) => item.name.startsWith("特定條件"));
}
// 請改寫為泛型函式，並使用泛型約束
function processData(item) {
    console.log(`處理資料，ID 為: ${item.id}, Data: ${item.data}`);
    // ... 其他邏輯
}
// 正常使用
processData({ id: "123", data: "任何資料" });
// 請改寫為泛型函式，並使用泛型約束
function handleEvent(eventName, handler) {
    // ... 其他邏輯
}
// 正常使用
handleEvent("click", () => console.log("Clicked!"));
// 請改寫為泛型函式，並使用泛型約束
function processData2(item) {
    console.log(`資料: ${item.data}, 時間戳: ${item.timestamp}`);
}
// 正常使用
processData2({ data: "some data", timestamp: new Date() });
// 錯誤使用（將導致編譯錯誤，因為缺少 timestamp 屬性）
// processData({ data: "some data" });
