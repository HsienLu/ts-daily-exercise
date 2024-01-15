/*
情境：你需要儲存不同的使用者角色，如「管理員」、「使用者」和「訪客」。這些角色是固定的且有特定的名稱。
A. 列舉 (Enum)
情境：你正在開發一個函式，需要回傳一個包含經度和緯度的地理座標。
B. 元組 (Tuple)
情境：你需要一個儲存全台灣各家庭的數據資料，例如每個家庭的總年收入。
C. 陣列 (Array)
情境：你需要表示一週的七天，每天都有一個特定的名稱。
A. 列舉 (Enum)
情境：你需要追蹤一個電子商務網站上的產品類別，這些類別已經固定，不會隨時間而更改。
A. 列舉 (Enum)


*/

enum OrderStatus {
  Pending,
  Shipping,
  Delivered,
  Cancelled,
}

// 更新訂單狀態
function changeOrderStatus(orderId: number, newStatus: OrderStatus) {
  console.log(`訂單 ${orderId} 的狀態已更新為：${OrderStatus[newStatus]}`);
}

// 範例使用
let orderId = 123; // 假設的訂單 ID

changeOrderStatus(orderId, OrderStatus.Pending);
