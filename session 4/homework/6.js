let Complete = ["false","true"]

let Task =
[
    {
        "Task":"HTML",
        "Complete": Complete[0]
    },
    {
        "Task":"CSS",
        "Complete": Complete[0]
    },
    {
        "Task":"Basic of JS",
        "Complete": Complete[0]
    },
    {
        "Task":"Node Package Manager",
        "Complete": Complete[0]
    },
    {
        "Task":"GIT",
        "Complete": Complete[0]
    },
];

console.log("Hi there, this is your learning tasks to frond-end developer career:")
for ( let i = 0 ; i < 5;i++)
{
    console.log((i+1)+"."+Task[i].Task)
    console.log("Complete:"+Task[i].Complete)
}

const showPrompt = () =>
{
    let newPrompt = prompt("Enter your command (New, Delete , Update , Complete)").toLowerCase()
    switch(newPrompt)
    {
        case "new":
            let newTask = 
            {
                "Task":prompt("Enter a new task:"),
                "Complete":Complete[0]
            }
            Task.push(newTask)
            showPrompt()
            break
        case "delete":
            Task.splice(prompt("Nhap vi tri muon xoa: ")-1,1)
            showPrompt()
            break
        case "update":
            let updateTask = 
            {
                "Task":prompt("Enter a new title:"),
                "Complete":Complete[0]
            }
            Task[prompt("Enter position:")-1] = updateTask
            showPrompt()
            break
        case "complete":
            Task[prompt("Enter position")-1].Complete = Complete[1]
            showPrompt()
            break
        default:
            showPrompt()
            break
    }
}
showPrompt()