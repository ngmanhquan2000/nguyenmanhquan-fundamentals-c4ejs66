let mang=prompt("Nhập số vào đây")
let mang1=mang.split(",")
let tong=0
for ( let i = 0 ; i < mang1.length;i++)
{
    tong = tong + Number(mang1[i])
}
alert("The sum of them is " + tong)
