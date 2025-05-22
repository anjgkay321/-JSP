import React, { useState } from "react";
import { TodoList, AddTodo } from "./PresentationalComponent";

function TodoApp() {
  const [todoList, setTodoList] = useState([]);     //배열
  const [idx, setIdx] = useState(0);                //Int
  const [inputValue, setInputValue] = useState(""); //""

  const handleAddTodo = (e) => {
    if (e.keyCode === 13 && isValid(inputValue)) {
      const newTodo = {
        id: idx + 1,
        todo: inputValue,
        date: new Date(),
        isEdit: false,
        isDelete: false,
        isDone: false,
      };
      todoList.push(newTodo);
      setTodoList(todoList.sort((a, b) => b.id - a.id).map(item=>item));
      setIdx(idx + 1);
      setInputValue("");
    }
  };

  const handleEditTodo = (id) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          const updatedItem = { ...item, isEdit: !item.isEdit };
          if (updatedItem.isEdit) {
            setInputValue(updatedItem.todo); // inputValue를 현재 todo 내용으로 설정
          } else {
            updatedItem.todo = inputValue; // 수정된 inputValue를 저장
          }
          return updatedItem;
        }
        return { ...item, isEdit: false };
      })
    );
  };

  const handleDeleteTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const handleDoneTodo = (id) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const handleDragStart = (e, startId) => {
    e.dataTransfer.setData("startId", startId);
  };

  const handleDrop = (e, dropId) => {
    const startId = parseInt(e.dataTransfer.getData("startId")); // 드래그 시작 항목의 ID
    const startItem = todoList.find((item) => item.id === parseInt(startId));
    const dropItem = todoList.find((item) => item.id === dropId);

    if (startItem && dropItem) {
      startItem.id = dropItem.id;
      dropItem.id = startId;
    }
    console.log('todolist',todoList); //리랜더링 필요
    setTodoList(todoList.sort((a, b) => b.id - a.id).map(item=>item));

  };



  const isValid = (todo) => todo !== "";

  return (
    <div className="wrapper">
      <header>
        <div className="top-header"></div>
        <nav className="layout-360">
          <h3>- TO DO -</h3>
        </nav>
      </header>
      <main>
        <section className="layout-360">
          <TodoList
            todoList={todoList}
            handleEditTodo={handleEditTodo}
            handleDeleteTodo={handleDeleteTodo}
            handleDoneTodo={handleDoneTodo}
            handleDragStart={handleDragStart}
            handleDrop={handleDrop}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </section>
      </main>
      <AddTodo
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleAddTodo={handleAddTodo}
      />
    </div>
  );
}

export default TodoApp;
