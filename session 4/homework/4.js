//4.1 .. 4.2    

let dictionary = 
{
    "debug": "The process of figuring out why your program has a certain error and how to fix it",
    "done " : "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
    "defect ":"The formal word for ‘error’",
    "pm":"The short version of Project Manager, the person in charge of the final result of a project",
    "ui/ux": "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
}

const showPrompt = () =>
{   
    alert("Hi there, this is dev dictionary")
    let search = prompt("Enter a keyword:").toLowerCase()
    if ( dictionary[search] == undefined)
    {   
            dictionary[search] = prompt("we could not find your word: "+ search + ", leave your explanation")
            alert("done")
            showPrompt()
    }
    else
    {
            alert(dictionary[search])
            showPrompt()
    }
}
showPrompt()