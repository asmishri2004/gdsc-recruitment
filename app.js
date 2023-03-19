let taskInput = document.getElementById("task-input");
      let addTaskBtn = document.getElementById("add-task-btn");
      let taskList = document.getElementById("task-list");

      addTaskBtn.addEventListener("click", function() {
        let taskText = taskInput.value;
        if (taskText.trim() === "") {
          alert("Please enter a task!");
          return;
        }
        let li = document.createElement("li");
        let taskSpan = document.createElement("span");
        taskSpan.classList.add("task-text");
        taskSpan.innerText = taskText;
        li.appendChild(taskSpan);

        let editSpan = document.createElement("span");
        editSpan.classList.add("edit");
        editSpan.innerHTML = "&#9998;";
        editSpan.addEventListener("click", function() {
          let editInput = document.createElement("input");
          editInput.type = "text";
          editInput.value = taskSpan.innerText;
          li.replaceChild(editInput, taskSpan);

          let saveBtn = document.createElement("button");
          saveBtn.innerText = "Save";
          saveBtn.addEventListener("click", function() {
            let newTaskText = editInput.value;
            if (newTaskText.trim() === "") {
              alert("Please enter a task!");
              return;
            }
            let newTaskSpan = document.createElement("span");
            newTaskSpan.classList.add("task-text");
            newTaskSpan.innerText = newTaskText;
            li.replaceChild(newTaskSpan, editInput);
          });

          li.appendChild(saveBtn);
        });
        li.appendChild(editSpan);

        let completeSpan = document.createElement("span");
        completeSpan.classList.add("complete");
        completeSpan.innerHTML = "&#10004;";
        completeSpan.addEventListener("click", function() {
          li.classList.toggle("completed");
        });
        li.appendChild(completeSpan);

        taskList.appendChild(li);
        taskInput.value = "";
      });