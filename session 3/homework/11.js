let a = prompt("Nhap so vao day:")
let a1 = a.split(",")



function oddNumber(value)
{
    return ( value % 2 == 1)
}

let a2 = a1.filter(oddNumber)

alert(a1+"=>"+a2)

