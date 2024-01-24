//題目一：計算陣列總和
//開發一個函式 calculateSum，並接受一個數字陣列作為參數，來計算出其總和。請使用泛型約束來確保傳入的參數必須是數字陣列。
function calculateSum1<T extends number>(arr: []) {
  let sum = 0;
  arr.map((v) => {
    sum += v;
  });
  return sum;
}
//題目二: 篩選擁有特定屬性的物件陣列
//開發一個函式 filterItems，該函式接受一個物件陣列，並回傳所有具有特定屬性的物件。使用泛型約束來確保每個物件至少包含該屬性。
interface WithName {
  name: string;
}
// 請調整為泛型函式，並使用 WithName 做為泛型約束條件，確保每個物件至少包含該屬性。
function filterItems<T extends WithName>(items: T[]) {
  return items.filter((item) => item.name.startsWith("特定條件"));
}
//題目三: 泛型介面中的多屬性檢查
//開發一個函式 processData，該函式接受一個具有 id 和 data 屬性的物件。使用泛型約束來確保傳入的物件符合此結構。

interface DataItem {
  id: string;
  data: any;
}
// 請改寫為泛型函式，並使用泛型約束
function processData<T extends DataItem>(item: T) {
  console.log(`處理資料，ID 為: ${item.id}, Data: ${item.data}`);
  // ... 其他邏輯
}

// 正常使用
processData({id: "123", data: "任何資料"});

// 錯誤使用（將導致編譯錯誤，因為物件不符合 DataItem 結構）
// processData({ id: '123' });

//題目四: 事件處理器
//開發一個函式 handleEvent，該函式接受一個事件名稱和一個處理函式。使用泛型約束來確保事件名稱是特定集合的一部分。
type EventName = "click" | "mouseover";

// 請改寫為泛型函式，並使用泛型約束
function handleEvent<T extends EventName, U>(eventName: T, handler: U) {
  // ... 其他邏輯
}
// 正常使用
handleEvent("click", () => console.log("Clicked!"));

// 錯誤使用（將導致編譯錯誤，因為 'scroll' 不是 EventName 的一部分）
// handleEvent("scroll", () => console.log("Scrolled!"));

//泛型約束用於資料處理的函式
//開發一個函式 processData，該函式接受一個包含 data 和 timestamp 屬性的物件。使用泛型約束來確保物件包含這些屬性。
interface DataWithTimestamp {
  data: any;
  timestamp: Date;
}

// 請改寫為泛型函式，並使用泛型約束
function processData2<T extends DataWithTimestamp>(item: T) {
  console.log(`資料: ${item.data}, 時間戳: ${item.timestamp}`);
}

// 正常使用
processData2({data: "some data", timestamp: new Date()});

// 錯誤使用（將導致編譯錯誤，因為缺少 timestamp 屬性）
// processData({ data: "some data" });
