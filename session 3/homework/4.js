let Quanao = ["Jean","T-Shirt","Socks"]

const showPrompt = () => 
{
    let newPrompt = prompt("Nhap C/R/U/D").toUpperCase()
    switch (newPrompt)
    {
        case "C":
            Quanao.push(prompt("Them quan ao vao day: "))
            alert("done")
            showPrompt()
            break;
        case "R":
            Quanao.forEach(value => console.log(value))
            showPrompt()
            break
        case "U":
            Quanao[prompt("Nhap index muon update")-1]=prompt("Nhap ten moi")
            showPrompt()
            break
        case "D":
            Quanao.splice(prompt("Nhap so muon xoa"),1)
            alert("done")
            showPrompt()
            break
        default:
            alert("This commend is not supported")
            showPrompt()
            break
    }  
}
showPrompt()