/*
在 TypeScript 中，型別別名（Type Aliases）的使用是為了什麼目的？
C. 為了給已存在的型別一個新名稱，並可用於建立複雜型別結構

條件型別（Conditional Types）的一般形式是什麼？
A. A extends B ? C : D

下面哪個是有效的型別別名宣告？
C. type example = string;

*/

type BooksData = {
  id: number;
  title: string;
  isBorrowed: boolean;
  borrowedBy: string | null;
};

function rentBook(books: BooksData[], bookId: BooksData["id"], userId: string) {
  // 租借圖書
  const book = books.find((b) => b.id === bookId);
  if (book && !book.isBorrowed) {
    book.isBorrowed = true;
    book.borrowedBy = userId;
    console.log(`成功租借圖書：${book.title}`);
    return true;
  } else {
    book
      ? console.log(`無法租借圖書：${book.title}`)
      : console.log(`此圖書不存在`);
    return false;
  }
}

function returnBook(books: BooksData[], bookId: number) {
  // 歸還圖書
  const book = books.find((b) => b.id === bookId);
  if (book && book.isBorrowed) {
    book.isBorrowed = false;
    book.borrowedBy = null;
    console.log(`已歸還圖書：${book.title}`);
    return true;
  } else {
    book
      ? console.log(`無法歸還圖書：${book.title}`)
      : console.log(`此圖書不存在`);
    return false;
  }
}

const libraryBooks = [
  {id: 1, title: "JavaScript 程式設計", isBorrowed: false, borrowedBy: null},
  {id: 2, title: "TypeScript 實戰", isBorrowed: false, borrowedBy: null},
  {id: 3, title: "React 開發入門", isBorrowed: false, borrowedBy: null},
];

// 執行租借、歸還邏輯
rentBook(libraryBooks, 2, "user123");
returnBook(libraryBooks, 1);
