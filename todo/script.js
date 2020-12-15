const btn = document.querySelector(".btn");
const list = document.querySelector(".list");
const input = document.querySelector(".input");
const options = document.querySelector(".options");

btn.addEventListener("click", addTodo);
list.addEventListener("click", deleteCheck);
options.addEventListener("click", show);

function addTodo(e) {
  e.preventDefault();

  // add div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("item");

  // add item
  const addItem = document.createElement("li");
  //const value = input.value;
  addItem.classList.add("item-input");
  addItem.innerText = input.value;
  todoDiv.appendChild(addItem);
  //console.log(input.value);

  // add check button
  const check = document.createElement("button");
  check.classList.add("item-check-btn");
  check.innerHTML = '<i class="fa-check fas icn"></i>';
  todoDiv.appendChild(check);

  // add delete button
  const remove = document.createElement("button");
  remove.classList.add("item-remove-btn");
  remove.innerHTML = '<i class="fa-trash fas icn"></i>';
  todoDiv.appendChild(remove);
  //console.log(list);

  // append todoDiv
  list.appendChild(todoDiv);
  input.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  switch (item.classList[0]) {
    case "fa-trash":
      {
        const todo = item.parentElement.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
          todo.remove();
        });
      }
      break;
    case "item-remove-btn":
      {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function () {
          todo.remove();
        });
      }
      break;
    case "item-check-btn":
      {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
      }
      break;
    case "fa-check":
      {
        const todo = item.parentElement.parentElement;
        todo.classList.toggle("completed");
      }
      break;
  }
}

function show(e) {
  const option = list.childNodes;
  option.forEach(function (el) {
    switch (e.target.value) {
      case "all":
        {
          el.style.display = "flex";
        }
        break;

      case "completed":
        {
          if (el.classList.contains("completed")) {
            el.style.display = "flex";
          } else {
            el.style.display = "none";
          }
        }
        break;

      case "uncompleted":
        {
          if (!el.classList.contains("completed")) {
            el.style.display = "flex";
          } else {
            el.style.display = "none";
          }
        }
        break;
    }
  });
}
