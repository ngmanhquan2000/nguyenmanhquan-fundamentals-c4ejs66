let Quanao = ["Jean","T-Shirt","Socks"]
let Luachon 
do{
    Luachon = prompt("Hi there, welcome to shop admin panel, what you want [C,R,U,D]").toUpperCase()
    if(Luachon != "C" && Luachon != "R" && Luachon != "U" && Luachon != "D")
    {
        alert("This commend is not supported")
    }
}while(Luachon != "C" && Luachon != "R" && Luachon != "U" && Luachon != "D" )

if(Luachon=="C")
{
    Quanao.push(prompt("Them quan ao vao day: "))
    alert("Done")
    Quanao.forEach(value => console.log(value))
}
if(Luachon=="R")
{
    Quanao.forEach(value => console.log(value))
}