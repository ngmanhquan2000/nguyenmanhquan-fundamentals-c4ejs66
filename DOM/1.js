let a = document.getElementById("a")
let button = document.getElementById("button")
let input = document.getElementById("input")

console.dir(a.href)

button.addEventListener("click",()=>{
    input.value = a.href
})
let select = document.getElementById("select")
let button1 = document.getElementById("button1")
let input1 = document.getElementById("input1")

button1.addEventListener("click",()=>{
    for(let i = 0 ; i < select.options.length ; i++)
    {
        if(input1.value == select.options[i].value)
        {
            select.remove(select.options[i])
        }
    }
})
