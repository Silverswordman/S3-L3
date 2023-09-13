const addTaskButton = document.getElementById("form-task");

addTaskButton.addEventListener("submit", function (e) {
  e.preventDefault();

  const newinputTask = document.getElementById("new-task");

  const task = newinputTask.value;

  console.log(newinputTask.value);

  newinputTask.value = " ";

  const newTaskElement = document.createElement("div");

  newTaskElement.classList.add("new-task-class");

  newTaskElement.innerHTML =
    " <p>  " +
    task +
    " </p> <button onclick= doneTask(event)> Done </button>" +
    "<button onclick= removeTask(event)> Delete </button>";

  document.getElementById("task-list").appendChild(newTaskElement);
});

const removeTask = function (e) {
  const removeButton = e.target;

  removeButton.parentElement.remove();
};

// const doneTask = function (e) {
//   const doneButton = e.target;
//   doneButton.addEventListener("click");
// };
