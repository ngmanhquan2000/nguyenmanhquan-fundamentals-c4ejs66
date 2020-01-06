let mang=prompt("Nhập số vào đây")
let mang1=mang.split(",")
let min = Number(mang1[0])
for ( let i = 0 ; i < mang.length ; i++)
{
    if(Number(mang1[i])<min)
    {
        min = Number(mang1[i])
    }
}
alert("The smallest number is "+min)