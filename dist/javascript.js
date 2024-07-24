const container = document.getElementById("container");
const task_container = document.getElementById("task_container");
const addButton = document.getElementById("addButton");

let error_message = null; // Initialize error_message to null

addButton.addEventListener("click", () => {
  let task = document.getElementById("taskInput").value;
  if (task.trim() === "") {
    if (error_message) {
      error_message.remove();
    }

    // Create and display a new error message
    error_message = document.createElement("p");
    error_message.className = "mt-2";
    error_message.textContent = "Please enter a task";

    container.insertBefore(error_message, task_container);
    setTimeout(() => {
      if (error_message) {
        error_message.remove();
      }
    }, 1000);
  } else {
    // Add a new task
    const task_text = document.createElement("button");
    document.getElementById("taskInput").value = "";
    task_text.className = "max-w-80 text-left mt-2 hover:line-through";
    task_text.textContent = task;

    task_text.addEventListener("click", () => {
      task_text.remove();
    });

    task_container.appendChild(task_text);
  }
});
