"use strict";
// 取得 HTML 元素
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
// 儲存待辦事項陣列
const tasks = [];
// 建立新的待辦事項
function createTask(taskText) {
    const task = {
        text: taskText,
        done: false,
    };
    return task;
}
// 更新待辦事項列表
function renderTaskList() {
    // 清空現有的清單項目
    taskList.innerHTML = "";
    // 依次處理每個待辦事項
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        // 建立一個待辦 DOM 元素
        const listItem = document.createElement("li");
        // 檢查是否已完成，如果是，添加完成樣式
        if (task.done) {
            listItem.classList.add("done");
        }
        // 顯示待辦事項文字
        listItem.textContent = task.text;
        // 建立編輯按鈕
        const editButton = document.createElement("button");
        editButton.textContent = "編輯";
        editButton.addEventListener("click", () => {
            const editedText = prompt("編輯待辦事項", task.text);
            if (editedText !== null) {
                task.text = editedText;
                renderTaskList();
            }
        });
        // 建立刪除按鈕
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "刪除";
        deleteButton.addEventListener("click", () => {
            const confirmDelete = confirm("確定要刪除這個待辦事項嗎？");
            if (confirmDelete) {
                tasks.splice(i, 1);
                renderTaskList();
            }
        });
        // 將編輯和刪除按鈕添加到待辦列表
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        // 添加點擊事件監聽，切換完成狀態
        listItem.addEventListener("click", () => {
            task.done = !task.done;
            renderTaskList();
        });
        // 將該待辦添加到待辦列表中
        taskList.appendChild(listItem);
    }
}
// 新增待辦事項的事件監聽
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    // 確保輸入不為空
    if (taskText !== "") {
        const task = createTask(taskText);
        // 添加待辦事項到陣列中
        tasks.push(task);
        // 清空輸入框
        taskInput.value = "";
        // 重新渲染待辦事項清單
        renderTaskList();
    }
});
// 初始化時渲染待辦事項清單
renderTaskList();
