{

    const tasks = [
        /* {
             content: "obejrzeć lekcję",
             done: false,
         },
         {
             content: "zrobić nototaki",
             done: true,
         },
         {
             content: "odrobić pracę domową",
             done: false,
         },*/
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    };

    function removeTask(taskIndex) {
        tasks.splice(taskIndex, 1);
        render();
    }

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
    <li class="section__tasks--item${task.done ? " " : ""} js-tasks">
    
    <button class="js-done button__done">✓</button>

    <span class="task__${task.done ? " section__tasks--itemDone" : ""}">
    ${task.content}
  </span>    

  <button class="js-remove button__remove">🗑</button>
    </li>
        `;
            /*
            style=\"text-decoration: line-through\"
            */
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}


/* 

before remodeling
min22
 
{
    const tasks = [
        {
            content: "obejrzeć lekcję",
            done: false,
        },
        {
            content: "zrobić nototaki",
            done: true,
        },
        {
            content: "odrobić pracę domową",
            done: false,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
    <li${task.done ? " style=\"text-decoration: line-through\"" : ""}>
    ${task.content}
    </li>
        `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const newTaskContent = document.querySelector(".js-newTask").value.trim();
            if (newTaskContent === "") {
                return;
            }

            tasks.push({
                content: newTaskContent,
            });

            render();
        });
    };

    init();
}
*/

/* 05:40 */