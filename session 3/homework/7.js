const arr = [3,4,6,-9,10,-88,2]
let nhap = prompt("Enter a number")
let kiemtra = null
let index
for ( let i = 0 ; i < arr.length;i++)
{
    if(nhap == arr[i])
    {
        kiemtra = true
        index = i
    }
}

if(kiemtra == true)
{
    alert(nhap + " is FOUND in my array at index " + index  )
}
else 
{
    alert(nhap + " is NOT found in my array" )
}