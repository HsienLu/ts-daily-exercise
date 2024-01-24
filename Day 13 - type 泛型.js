"use strict";
//題目一： 資料庫重構優化
//請嘗試將UserEntry 和 ProductEntry重構，合併成一個自訂的 type，並使用泛型來進行優化
// 建立 UserEntry 和 ProductEntry 的函式
function createUserEntry(id, data) {
    return { id, data };
}
function createProductEntry(id, data) {
    return { id, data };
}
// 使用函式來建立 UserEntry 和 ProductEntry
const userEntry = createUserEntry("user1", { name: "John Doe", age: 30 });
const productEntry = createProductEntry("product1", {
    name: "Apple iPhone 13",
    price: 799,
});
// 建立一個 Customer 陣列來儲存客戶資訊
let customers = [];
// 定義一個函式，該函式接收一個 Room 並回傳一個 RoomOperationResult
function bookRoom(room) {
    // 檢查房間是否可用
    if (room.available) {
        // 預訂房間，將 available 屬性設為 false
        room.available = false;
        const result = {
            success: true,
            data: room,
            message: "預訂成功",
        };
        return result;
    }
    else {
        const result = {
            success: false,
            data: room,
            message: "房間已被預訂",
        };
        return result;
    }
}
// 定義一個函式，該函式接收一個 Room 並回傳一個 RoomOperationResult
function cancelRoom(room) {
    // 取消房間，將 available 屬性設為 true
    room.available = true;
    const result = {
        success: true,
        data: room,
        message: "取消預訂成功",
    };
    return result;
}
// 定義一個函式，該函式接收一個 Customer 並回傳一個 CustomerOperationResult
function addCustomer(customer) {
    // 將客戶添加到客戶陣列中
    customers.push(customer);
    const result = {
        success: true,
        data: customer,
        message: "新增客戶成功",
    };
    return result;
}
// 建立一個 Room
const room = { id: "1", type: "單人房", price: 1000, available: true };
// 使用 bookRoom 函式來預訂房間
const bookResult = bookRoom(room);
console.log(bookResult); // 輸出：{ success: true, data: { id: '1', type: '單人房', price: 1000, available: false }, message: '預訂成功' }
// 使用 cancelRoom 函式來取消房間
const cancelResult = cancelRoom(room);
console.log(cancelResult); // 輸出：{ success: true, data: { id: '1', type: '單人房', price: 1000, available: true }, message: '取消預訂成功' }
// 建立一個 Customer
const customer = { id: "1", name: "John Doe" };
// 使用 addCustomer 函式來添加客戶
const addCustomerResult = addCustomer(customer);
console.log(addCustomerResult); // 輸出：{ success: true, data: { id: '1', name: 'John Doe' }, message: '新增客戶成功' }
