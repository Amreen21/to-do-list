function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const span = document.createElement("span");
  span.textContent = " " + taskText;
  const delBtn = document.createElement("button");
  delBtn.textContent = "delete";
  delBtn.style.marginLeft = "10px";
  delBtn.onclick = function () {
    taskList.removeChild(li); 
  };
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);
  input.value = "";
}
document.getElementById("sub").addEventListener("click", addTask);
