const menu = () =>
{
console.log("\nTask Manager:");
console.log("1. Add Task");
console.log("2. View Tasks");
console.log("3. Update Task");
console.log("4. Toggle Task Completion");
console.log("5. Remove Task");
console.log("6. Search Tasks");
console.log("7. Exit");
console.log("***************************");
}
let initialID = 1;
let notExit = true;

const tasks = [];
menu();

// add task
function addTask (description)
{
    const task = {
        id:initialID++,
        desc: description,
        completed: false
    };
    tasks.push(task);
    console.log (`Task Added: "${description}"`);
}

// display tasks
function diplay()
{
    if (tasks.length === 0) {
        console.log("No tasks Added.");
    }
    else
    {
        console.log("All tasks:");
        const printtasks = (task)=> console.log (`${task.description} : ${task.completed===true ? "Completed" : "Not Completed"}`);
        tasks.forEach(printtasks);

    }   
}

//update task
function update(iid, newDesc) {
    const task = tasks.find(task => task.id === iid);
    if (task) {
        task.description = newDesc;
        console.log(`Task "${id}" updated successfully`);
    } else {
        console.log("Task not found.");
    }
}

// toggle
function toggle(iid) {
    const taskById = tasks.find(taskById => taskById.id === iid);
    if (taskById) {
        if (taskById.completed===true) taskById.completed=false;
        else if (taskById.completed === false) taskById.completed = true;

        console.log(`Task "${taskById.description}" marked as ${taskById.completed}.`);
    }
    else
    {
        console.log("Task not found.");
    }
   /* while (notExit)
    {
        menu(); let chosen = prompt("Choose from 1 - 6");
    }*/
}

 // Remove task
 function remove(id) {
    const idTask = this.tasks.findIndex(task => task.id === id);
    if (idTask !== -1) {
        const removedTask = this.tasks.splice(idTask, 1);
        console.log(`Task "${removedTask.description}" removed successfully!`);
    } else {
        console.log("Task not found.");
    }
}

// search 
function search (desc){
        const righttask = tasks.filter(task => task.description.toLowerCase().includes(desc.toLowerCase()));
            console.log("Thr result:");
            righttask.forEach(task => {
                console.log(`${task.id}. ${task.description} [${task.completed ? "Completed" : "Not Completed"}]`);
            });
}
    

function employment(){   
    let chosen = prompt("Choose from 1 - 6");
    menu();

    switch (chosen)
    {
        case '1': // add task
        {     
            let description = prompt("Enter the task description:");
            addTask (description);
            employment();
        } ;
        break;
        
        
        case '2': // display
        {
            diplay();
            employment();
        };
        break;

        case '3': // updte
        {
           let inputID = prompt("Enter task ID:");
           let inputDesc = prompt("Enter new description:");
           update(inputID,inputDesc);
           employment();
        }; 
        break;
    
        case '4': // toggle
        {
           let inputID = prompt("Enter task ID:");
           toggle(inputID);
           employment();
        }; 
        break;

        case '5': // remove
        {
           let inputID = prompt("Enter task ID:");
           remove(inputID);
           employment();
        }; 
        break;

        case '6': // search
        {
           let inputDesc = prompt("Enter the description you want to search about:");
           search(inputDesc);
           employment();
        }; 
        break;

        case '7': // exit
        {
            this.close();
        }; 
        break;
    
    }
}

employment();


