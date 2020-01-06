// let chieucao = Number(prompt("Nhap chieu cao(cm) : "))
// let cannang = Number(prompt("Nhap can nang(kg): "))
// let ketqua = null
// let chieucao1 = (chieucao/100)
// let BMI = cannang/ (chieucao1 * chieucao1)

// if ( BMI < 16)
// {
//     ketqua = "Severely"
// }
// else if( BMI < 18.5)
//     {
//         ketqua = "Underweight"
//     }
//     else if( BMI < 25) 
//         {
//             ketqua = "Normal"
//         }
//         else if( BMI < 30)
//         {
//             ketqua = "Overweight"
//         }
//         else
//         {
//             ketqua = "Obese"
//         }
// alert(ketqua)
// console.log(BMI)

// let chieucao = Number(prompt("Nhap chieu cao(cm)"))

// if(chieucao < 150)
// {
//     console.log("lun`")
// }else if(chieucao < 170)
//     {
//         console.log("Tam. chap' nhan. duoc")
//     }else 
//         {
//             console.log("Qua' on?")
//         }

let a = 6
let b = 4
let i = 0
let j = 0 
let n = 3
let goc = 120 
// rt(90)
for (i = 0; i<4;i++)
{
  for ( j = 0 ; j < n ; j ++ )
  {
    console.log(goc)
  }
  goc = 180 - (60*a/b)
  a = a + 3
  b = b + 1 
  n = n + 1 
}