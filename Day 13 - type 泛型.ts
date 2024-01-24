//題目一： 資料庫重構優化
//請嘗試將UserEntry 和 ProductEntry重構，合併成一個自訂的 type，並使用泛型來進行優化

// 定義 UserEntry 和 ProductEntry 型別
type entry<T> = {
  id: string;
  data: T;
};
type UserEntry = entry<{
  name: string;
  age: number;
}>;

type ProductEntry = entry<{
  name: string;
  price: number;
}>;

// 建立 UserEntry 和 ProductEntry 的函式
function createUserEntry(
  id: string,
  data: {name: string; age: number}
): UserEntry {
  return {id, data};
}

function createProductEntry(
  id: string,
  data: {name: string; price: number}
): ProductEntry {
  return {id, data};
}

// 使用函式來建立 UserEntry 和 ProductEntry
const userEntry = createUserEntry("user1", {name: "John Doe", age: 30});
const productEntry = createProductEntry("product1", {
  name: "Apple iPhone 13",
  price: 799,
});

//題目二：旅館訂房網
//請嘗試將RoomOperationResult 和 CustomerOperationResult重構，合併成一個自訂的type ，並使用泛型來進行優化

// 定義 Room 型別別名
type Room = {
  id: string;
  type: string;
  price: number;
  available: boolean;
};

// 定義 Customer 型別別名
type Customer = {
  id: string;
  name: string;
};

// 定義 RoomOperationResult 和 CustomerOperationResult 型別別名
type OperationResult<T> = {
  success: boolean;
  data: T;
  message: string;
};

// 建立一個 Customer 陣列來儲存客戶資訊
let customers: Customer[] = [];

// 定義一個函式，該函式接收一個 Room 並回傳一個 RoomOperationResult
function bookRoom(room: Room): OperationResult<Room> {
  // 檢查房間是否可用
  if (room.available) {
    // 預訂房間，將 available 屬性設為 false
    room.available = false;

    const result: OperationResult<Room> = {
      success: true,
      data: room,
      message: "預訂成功",
    };

    return result;
  } else {
    const result: OperationResult<Room> = {
      success: false,
      data: room,
      message: "房間已被預訂",
    };

    return result;
  }
}

// 定義一個函式，該函式接收一個 Room 並回傳一個 RoomOperationResult
function cancelRoom(room: Room): OperationResult<Room> {
  // 取消房間，將 available 屬性設為 true
  room.available = true;

  const result: OperationResult<Room> = {
    success: true,
    data: room,
    message: "取消預訂成功",
  };

  return result;
}

// 定義一個函式，該函式接收一個 Customer 並回傳一個 CustomerOperationResult
function addCustomer(customer: Customer): OperationResult<Customer> {
  // 將客戶添加到客戶陣列中
  customers.push(customer);

  const result: OperationResult<Customer> = {
    success: true,
    data: customer,
    message: "新增客戶成功",
  };

  return result;
}

// 建立一個 Room
const room: Room = {id: "1", type: "單人房", price: 1000, available: true};

// 使用 bookRoom 函式來預訂房間
const bookResult = bookRoom(room);
console.log(bookResult); // 輸出：{ success: true, data: { id: '1', type: '單人房', price: 1000, available: false }, message: '預訂成功' }

// 使用 cancelRoom 函式來取消房間
const cancelResult = cancelRoom(room);
console.log(cancelResult); // 輸出：{ success: true, data: { id: '1', type: '單人房', price: 1000, available: true }, message: '取消預訂成功' }

// 建立一個 Customer
const customer: Customer = {id: "1", name: "John Doe"};

// 使用 addCustomer 函式來添加客戶
const addCustomerResult = addCustomer(customer);
console.log(addCustomerResult); // 輸出：{ success: true, data: { id: '1', name: 'John Doe' }, message: '新增客戶成功' }
