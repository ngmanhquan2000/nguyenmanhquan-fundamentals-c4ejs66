const getData = async () =>
{
    let api = await fetch("http://dummy.restapiexample.com/api/v1/employees")
    let data = await api.json()
    context.data = data.data
}

context = 
{
    data : null
}

let info = document.getElementById("info")

const viewData = async () =>
{
    await getData()
    for ( i = 0 ; i < context.data.length ; i++)
    {
        let html = 
        `
        <div id = 'user${i}'>
        <li>ID: ${context.data[i].id}</li>
        <li>Name: ${context.data[i].employee_name}</li>
        <li>Age: ${context.data[i].employee_age}</li>
        <li>Image: ${context.data[i].employee_image}</li>
        <div>Salary</div>
        </div>
        <br>
        `
        info.innerHTML += html
    }
}
const showSalary = async () => {
    await viewData()
    for(let i = 0; i < context.data.length ; i ++){
        let user =  document.getElementById(`user${i}`)
        user.addEventListener('click', () => {
            console.dir(user)
            user.children[4].classList.toggle('view')
        })
    }
}

showSalary()