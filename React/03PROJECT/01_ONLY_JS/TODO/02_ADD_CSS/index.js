document.addEventListener("DOMContentLoaded", function () {
  //----------------------------
  // 상태값(State)
  //----------------------------
  let idx = 0;
  let dragStartId = 0;
  let dropId = 0;
  const todoList = [];

  //----------------------------
  // 이벤트 처리
  //----------------------------
  const addInput = document.querySelector(".add-input");
  addInput.addEventListener("keydown", function (e) {
    // console.log("keyCode : ", e.keyCode);
    //엔터키
    const todo = addInput.value;
    if (e.keyCode === 13) {
      if (isValid(todo)) {
        const item = {
          id: ++idx,
          todo: todo,
          date: new Date(),
          isEdit: false,
          isDelete: false,
          isDone: false,
        };
        todoList.push(item);
        console.log("todoList", todoList);

        displayTodoList(todoList);
      } else {
        alert("VALIDATION CHECK ERROR");
      }
      addInput.value = "";
    }
  });

  //TodoList 표시 함수
  function displayTodoList(todoList) {
    //todoList 내림차순 정렬
    todoList.sort((a, b) => b.id - a.id);

    const items_el = document.querySelector(".items");

    //기존 연결정보 삭제
    while (items_el.firstChild) items_el.removeChild(items_el.firstChild);

    //다시 연결하기

    todoList.forEach((item) => {
      //-------------------------
      //노드 생성 & 기본속성 부여
      //-------------------------
      const item_el = document.createElement("div");
      item_el.classList.add("item");
      item_el.setAttribute("draggable", true);
      const fragment_el = document.createElement("div");
      fragment_el.classList.add("fragment");
      const todo_el = document.createElement("input");
      todo_el.classList.add("todo");

      const edit_el = document.createElement("div");
      edit_el.classList.add("edit");

      const a_edit = document.createElement("a");
      a_edit.setAttribute("href", "javascript:void(0)");

      const edit_icon = document.createElement("span");
      edit_icon.innerHTML = "edit";
      edit_icon.classList.add("material-symbols-outlined");

      const a_delete = document.createElement("a");
      a_delete.setAttribute("href", "javascript:void(0)");

      const delete_icon = document.createElement("span");
      delete_icon.innerHTML = "delete";
      delete_icon.classList.add("material-symbols-outlined");

      const done_el = document.createElement("div");
      done_el.classList.add("done");

      const a_done = document.createElement("a");
      a_done.setAttribute("href", "javascript:void(0)");

      const done_icon = document.createElement("span");
      done_icon.innerHTML = "done";
      done_icon.classList.add("material-symbols-outlined");

      //-------------------------
      //데이터 삽입 & 상태 처리
      //-------------------------
      item_el.setAttribute("data-id", item.id);
      todo_el.value = item.todo;

      //done 상태 확인
      console.log(item.id,"isDone ?",item.isDone);
    
      if (item.isDone) {
        // ::after 스타일제작
        item_el.classList.add('doneStyle')
      } else {
        
      }

      //Edit 상태 확인
      if (item.isEdit) {
        edit_icon.setAttribute("style", "color:red;");
        todo_el.setAttribute("style", "color:red");
        todo_el.readOnly = false;
        todo_el.focus();
      } else {
        edit_icon.setAttribute("style", "color:black;");
        todo_el.setAttribute("style", "color:black");
        todo_el.readOnly = true;
      }

      //DONE 버튼 이벤트 처리
      a_done.addEventListener("click", function () {
        const todoId = item.id;
        const curTodoItem = todoList.find((todo) => todo.id === todoId);
        // 해당 항목의 isEdit 상태를 토글합니다.
        if (curTodoItem) {
          curTodoItem.isDone = !curTodoItem.isDone;
        }
        console.log('a_done clicked..',todoList);
        // 리스트를 다시 렌더링하여 변경된 내용을 반영합니다.
        displayTodoList(todoList);

      });
      //EDIT 버튼 이벤트 처리
      a_edit.addEventListener("click", function () {
        //item과 동일한 todo 찾기
        const todoId = item.id;
        const curTodoItem = todoList.find((todo) => todo.id === todoId);

        // 모든 item에 edit 를 false 로 설정(현재 item을 제외하고 )
        todoList.forEach((todo) => {
          if (todo.id !== todoId) {
            todo.isEdit = false;
          }
        });
        // 해당 항목의 isEdit 상태를 토글합니다.
        if (curTodoItem) {
          curTodoItem.isEdit = !curTodoItem.isEdit;
          curTodoItem.todo = todo_el.value;
        }
        // 리스트를 다시 렌더링하여 변경된 내용을 반영합니다.
        displayTodoList(todoList);
      });

      //DELETE 버튼 이벤트 처리
      a_delete.addEventListener("click", function () {
        const todoId = item.id;
        console.log("delete id", todoId);
        todoList = todoList.filter((todoItem) => todoItem.id != todoId);
        displayTodoList(todoList);
        console.log(
          "result",
          todoList.filter((todoItem) => todoItem != todoId)
        );
      });

      //-------------------------
      //우선순위 올리기 순서지정하기(Drag & Drop)
      //-------------------------
      item_el.addEventListener("dragstart", function (event) {
        event.target.style.opacity = "0.5";
        //console.log("드래그Item id",event.target.getAttribute('data-id'))
        dragStartId = event.target.getAttribute("data-id");
      });

      item_el.addEventListener("dragend", function (event) {
        event.target.style.opacity = "1";
      });

      item_el.addEventListener("dragover", function (event) {
        event.preventDefault();
      });
      item_el.addEventListener("drop", function (event) {
        // console.log(event);
        event.preventDefault();

        //드랍전 해당 위치 노드
        //console.log(event.target);
        oldTodoItem = event.target.closest(".item");

        //현재노드의 id와 해당 위치노드의 id가 다르다면 id교체 후 todoList Sort
        //console.log('드랍된 위치의 id : ' + oldTodoItem.getAttribute('data-id'))
        dropId = oldTodoItem.getAttribute("data-id");

        //todoList 정렬
        dragedItem = todoList.find((todoItem) => todoItem.id == dragStartId);
        dropItem = todoList.find((todoItem) => todoItem.id == dropId);
        console.log("dragedItem", dragedItem);
        console.log("dropItem", dropItem);

        //순서바꿈
        dragedItem.id = dropId;
        dropItem.id = dragStartId;

        //디스플레이 다시
        displayTodoList(todoList);
      });

      //-------------------------
      //부모노드 연결
      //-------------------------
      a_done.appendChild(done_icon);
      done_el.appendChild(a_done);

      a_edit.appendChild(edit_icon);
      a_delete.appendChild(delete_icon);

      edit_el.appendChild(a_edit);
      edit_el.appendChild(a_delete);

      item_el.appendChild(fragment_el);
      item_el.appendChild(todo_el);
      item_el.appendChild(done_el);
      item_el.appendChild(edit_el);

      items_el.appendChild(item_el);
    });
  }

  //유효성 체크함수
  function isValid(todo) {
    if (todo === "") return false;
    return true;
  }
});
