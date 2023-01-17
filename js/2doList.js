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
    <li>
    ${task.content}
    </li>
    `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();
    };

    init();
}

/* 05:40 */