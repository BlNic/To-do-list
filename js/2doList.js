
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

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
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


/* before remodeling

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