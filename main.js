const inputTask = document.querySelector("#inputTask");
const tasksList = document.querySelector("#tasksList");
const newTaskButton = document.querySelector("#newTaskButton");
const clear = document.querySelector("#clear");
let tasks
const themeButton = document.querySelector("#themeButton")
const active = document.querySelector("#active");
const all = document.querySelector("#all");
const completed = document.querySelector("#completed")
let draggingItem
const placeholder = document.createElement("div");
placeholder.classList.add("placeholder");

itemsLeftCounter();
all.addEventListener("click", filterAll);
active.addEventListener("click", filterActive);
completed.addEventListener("click", filterCompleted);
clear.addEventListener("click", clearTasks)
newTaskButton.addEventListener("click", addNewTask)
inputTask.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        addNewTask();
    }}
)
themeButton.addEventListener("click", changeTheme)

if (localStorage.getItem("theme") === "light") {
    lightTheme()
}
else darkTheme();

tasksList.addEventListener("dragstart", (e) => {
    draggingItem = e.target;
    e.target.classList.add("dragging");

    // Ajouter le placeholder juste après l'élément déplacé
    tasksList.insertBefore(placeholder, draggingItem.nextSibling); //nextSibling = élément juste après dragginItem
});

tasksList.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
    placeholder.replaceWith(draggingItem); // Remplace le placeholder par l'élément déplacé
    draggingItem = null;
});

tasksList.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggingOverItem = getClosestTask(tasksList, e.clientY);

    if (draggingOverItem) {
        tasksList.insertBefore(placeholder, draggingOverItem);
    } else {
        tasksList.appendChild(placeholder);
    }
});

const mediaQuery = window.matchMedia("(max-width: 375px)");

changeQuery(mediaQuery)
mediaQuery.addEventListener("change", changeQuery)

function changeQuery(query) {
    const filters = document.querySelector(".filters")
    const dragAndDrop = document.querySelector(".dragAndDrop")
    if (query.matches) {
        document.body.insertBefore(filters, dragAndDrop)
        if (!filters.classList.contains("container", "bottomPart")) {
            filters.classList.add("container", "bottomPart")
            filters.style.justifyContent = "center";
            filters.style.gap = "10px";
        }
    }
}

// Fonction pour trouver l'élément le plus proche sous le curseur
function getClosestTask(container, y) {
    const draggableElements = [...container.querySelectorAll(".task:not(.dragging)")];

    let closest = null;
    let closestOffset = Number.NEGATIVE_INFINITY;

    draggableElements.forEach((child) => {
        const box = child.getBoundingClientRect();
        const offset = y - (box.top + box.height / 2);

        if (offset < 0 && offset > closestOffset) {
            closestOffset = offset;
            closest = child;
        }
    });

    return closest;
}

function addNewTask(){

    let taskValue = inputTask.value.trim();
    if (taskValue === "") {
        alert("Veuillez saisir quelque chose");
        return
    }

    // Créer div pour nouvelle tâche
    let newTask = document.createElement("div");
    newTask.classList.add("activeTask", "task", "appearing" );
    newTask.setAttribute('draggable', true)  //activer le drag and drop

    //button + libellé tâche
    let taskColLeft = document.createElement("div");
    newTask.prepend(taskColLeft)
    taskColLeft.textContent = taskValue;
    taskColLeft.style.display = "flex";
    taskColLeft.style.alignItems = "center";
    let buttonTask = document.createElement("button");
    buttonTask.classList.add('buttonTask');
    taskColLeft.prepend(buttonTask);

    //cross
    let taskColRight = document.createElement("div");
    newTask.append(taskColRight);
    let cross= document.createElement("button")
    cross.classList.add('cross')
    cross.style.opacity = 0;
    cross.setAttribute("title", "Delete todo")
    cross.style.backgroundImage = ("url(images/icon-cross.svg)")
    taskColRight.append(cross);

    tasksList.prepend(newTask);
    inputTask.value = ""

    setTimeout(() => {
        newTask.classList.remove("appearing")
    },1)

    itemsLeftCounter();

    newTask.addEventListener('mouseover', () => { 
        cross.style.opacity = 1
    })
    newTask.addEventListener('mouseout', () => {
        cross.style.opacity = 0
    })
               
    cross.addEventListener("click", () => {
        deleteTask(newTask)        
    })

    buttonTask.addEventListener("click", () => {
        if (!buttonTask.classList.contains('activeButton')) {
        completeTask(newTask, buttonTask)
        tasksLeft = document.querySelectorAll(".activeTask");
        }
        else 
        cancelCompleteTask(newTask, buttonTask)
        tasksLeft = document.querySelectorAll(".activeTask");
    })

}

function deleteTask(newTask) {
newTask.classList.add("removing");
newTask.classList.remove("activeTask");
itemsLeftCounter();
setTimeout(() => {
newTask.classList.add("hidden");
newTask.remove();
}, 400)
}

function completeTask(task, button) {
button.classList.add("activeButton")
task.classList.remove("activeTask")
task.classList.add("completedTask")
itemsLeftCounter();
}

function cancelCompleteTask(task, button){
button.classList.remove("activeButton")
task.classList.remove('completedTask')
task.classList.add('activeTask')
itemsLeftCounter();
}

function filterSelected(addClass, deleteClass1, deleteClass2) {
    if (!addClass.classList.contains('filterSelected')) {
        addClass.classList.add('filterSelected')
    }
    if (deleteClass1.classList.contains('filterSelected')) {
        deleteClass1.classList.remove('filterSelected');
    }
    if (deleteClass2.classList.contains('filterSelected')) {
        deleteClass2.classList.remove('filterSelected');
    }
}


function filterActive(){   

filterSelected(active, completed, all)

    let tasks = document.querySelectorAll(".task");

    tasks.forEach((task) => {
        if (!task.classList.contains("activeTask") && !task.classList.contains("hidden")) { //on cache tout ce qui n'est pas actif et déjà caché
            task.classList.add("removing")
            setTimeout(() =>{
                task.classList.add("hidden");
                task.classList.remove("removing")
            },400)
        }
        if (task.classList.contains("activeTask") && task.classList.contains("hidden")) { //on révèle les tâches actives qui sont cachées
            task.classList.remove("hidden")
            task.classList.add('appearing')
            setTimeout(() => {
                task.classList.remove("appearing");
    }, 1)
    }
})
}

function filterCompleted(){

    filterSelected(completed, active, all)

    let tasks = document.querySelectorAll(".task")
    tasks.forEach((task) => {
        if (!task.classList.contains("completedTask") && !task.classList.contains("hidden")) {
            task.classList.add("removing")
            setTimeout(() =>{
                task.classList.add("hidden");
                task.classList.remove("removing")
            },400)
        }
        if (task.classList.contains("completedTask") && task.classList.contains("hidden")) {
                task.classList.remove("hidden")
                task.classList.add('appearing')
                setTimeout(() => {
                    task.classList.remove("appearing");
        }, 1)
        }
    }
    )
}

function filterAll(){

    filterSelected(all, completed, active)

    let tasks = document.querySelectorAll(".task")
    tasks.forEach((task) =>{
        if (task.classList.contains("hidden")) {
            task.classList.remove("hidden")
            task.classList.add('appearing')
            setTimeout(() => {
                task.classList.remove("appearing");
    }, 1)
        }
    })
}


function clearTasks(){
    tasksCompleted = document.querySelectorAll(".completedTask");
    tasksCompleted.forEach ((task) => {
        task.classList.add('removing')
        setTimeout(() => {
        task.remove()
        }, 400)
    })
}

function itemsLeftCounter(){
    const itemsLeft = document.querySelector("#itemsLeft")
    tasksLeft = document.querySelectorAll(".activeTask");
    itemsLeft.textContent = `${tasksLeft.length} items left`
}

function changeTheme() {
    if (document.body.classList.contains("dark")) {
        lightTheme();
    }
    else { 
        darkTheme ()
    }
}

function lightTheme() {
    document.body.classList.remove("dark");
    themeButton.style.backgroundImage = "url(images/icon-moon.svg)";
    localStorage.setItem("theme", "light")
}

function darkTheme() {
    document.body.classList.add("dark");
    themeButton.style.backgroundImage = "url(images/icon-sun.svg)"
    localStorage.setItem("theme", "dark")
}