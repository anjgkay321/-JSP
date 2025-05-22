import React from "react";

const TodoList = ({
  todoList,
  handleEditTodo,
  handleDeleteTodo,
  handleDoneTodo,
  handleDragStart,
  handleDrop,
  inputValue,
  setInputValue,
}) => {
  return (
    <div className="items">
      {todoList
        .map((item) => (
          <div
            key={item.id}
            className="item"
            draggable
            onDragStart={(e) => handleDragStart(e, item.id)}
            onDrop={(e) => handleDrop(e, item.id)}
            onDragOver={(e) => e.preventDefault()}
            style={{ display: "flex" }}
          >
            <div className="fragment"></div>
            <input
              className="todo"
              value={item.isEdit ? inputValue : item.todo} // 수정 모드일 때는 inputValue 사용
              onChange={(e) => setInputValue(e.target.value)}
              readOnly={!item.isEdit}
              disabled={item.isDone}
              style={{
                color: item.isEdit ? "red" : "black",
              }}
            />
            <div className="done">
              <a href="#!" onClick={() => handleDoneTodo(item.id)}>
                <span className="material-symbols-outlined">done</span>
              </a>
            </div>
            <div className="edit">
              <a href="#!" onClick={() => handleEditTodo(item.id)}>
                <span
                  className="material-symbols-outlined"
                  style={{ color: item.isEdit ? "red" : "black" }}
                >
                  edit
                </span>
              </a>
              <a href="#!" onClick={() => handleDeleteTodo(item.id)}>
                <span className="material-symbols-outlined">delete</span>
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

const AddTodo = ({ inputValue, setInputValue, handleAddTodo }) => (
  <footer>
    <div className="add-block" style={{ display: "flex" }}>
      <span className="material-symbols-outlined add">add</span>
      <input
        type="text"
        className="add-input"
        placeholder="할 일을 입력하세요."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleAddTodo}
      />
    </div>
  </footer>
);

export { TodoList, AddTodo };
