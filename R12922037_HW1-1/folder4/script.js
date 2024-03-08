const todoList = document.querySelector("#todo-list");
const content = document.querySelector("#content");
const btn = document.querySelector("#btn");

const buttonClicks = () => {
  const value = content.value.trim();
  if(value.length > 0) {
    content.value = "";
    const todo = document.createElement("div");
    todo.innerHTML = value;
    todoList.appendChild(todo);
  }
};

btn.addEventListener("click", buttonClicks);
