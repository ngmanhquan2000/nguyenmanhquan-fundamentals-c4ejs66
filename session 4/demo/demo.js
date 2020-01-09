let Tudien = {
    'vcl':'vo cung luon',
    'abc':'anh biet chi',
}

const showPrompt = () =>
{   Object.keys(Tudien).forEach((value,index)=>
    {
        console.log(`${index+1}.${value}`)
    })
    let search = prompt("Muon tim tu nao")
    if( Tudien[search] == undefined )
    {
        let newPrompt = prompt(" Nhap Yes/no ").toUpperCase()
        switch(newPrompt)
            {
                case "YES":
                    Tudien[prompt("Nhap vao tu viet tat")]=prompt("Nhap vao nghia day du?")
                    Object.keys(Tudien).forEach((value,index)=>
{
    console.log(`${index+1}.${value}`)
})
                    showPrompt()
                    break
                case "NO":
                    alert("Cam on b")
                    showPrompt()
                    break
                default:
                    alert("Lua chon cua ban khong dung")
                    showPrompt()
                    break
            }
    }
    else
    {
        Object.keys(Tudien).forEach((value,index)=>
{
    console.log(`${index+1}.${value}`)
})
        showPrompt()
    }
}
showPrompt()