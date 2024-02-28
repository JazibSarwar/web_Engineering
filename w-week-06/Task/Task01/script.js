const mybtn = document.getElementById("btn");

function addtask() {   
    const input = document.getElementById("textarea");
    const ip = input.value;
    const task = document.createElement("div");
    task.className = "taskclass";
    const tasknode = document.createTextNode(ip);
    task.appendChild(tasknode);

    const container = document.getElementById("container");
    container.appendChild(task);
}

mybtn.onclick = addtask;
